import Keycloak from 'keycloak-js'
import { create } from 'zustand'

type KeycloakState = {
  keycloak: Keycloak | null
  isInitialized: boolean
  initializeKeycloak: () => void
  login: () => void
  logout: () => void
}

export const useKeycloak = create<KeycloakState>((set, get) => {
  const initializeKeycloak = () => {
    if (get().isInitialized) {
      console.error('Keycloak is already initialized!')
      return
    }

    const keycloak = new Keycloak({
      url: 'http://localhost:8081',
      realm: 'connect',
      clientId: 'frontend-web'
    })

    keycloak
      .init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
        checkLoginIframe: true,
        pkceMethod: 'S256'
      })
      .then(authenticated => {
        if (authenticated) {
          console.log('Authenticated', keycloak)
        } else {
          console.log('Not authenticated')
        }
        set({ keycloak: keycloak, isInitialized: true })
      })
      .catch(error => {
        set({ keycloak: null, isInitialized: false })
        console.error('Keycloak initialization error! ', error)
      })
  }

  return {
    keycloak: null,
    isInitialized: false,
    initializeKeycloak,
    login: () => {
      const keycloak = get().keycloak
      keycloak?.login({ redirectUri: 'http://localhost:3000/auth/callback' })
    },
    logout: () => {
      const keycloak = get().keycloak
      keycloak?.logout({ redirectUri: 'http://localhost:3000' })
    }
  }
})
