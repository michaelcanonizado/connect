import Keycloak from 'keycloak-js'
import { create } from 'zustand'

type AuthenticationState = {
  provider: Keycloak | null
  isInitialized: boolean
  initializeProvider: () => void
  login: () => void
  logout: () => void
}

export const useAuthentication = create<AuthenticationState>((set, get) => {
  const initializeProvider = async () => {
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
        set({ provider: keycloak, isInitialized: true })
      })
      .catch(error => {
        set({ provider: null, isInitialized: false })
        console.error('Keycloak initialization error!', error)
      })
  }

  return {
    provider: null,
    isInitialized: false,
    initializeProvider,
    login: () => {
      const keycloak = get().provider
      keycloak?.login({ redirectUri: 'http://localhost:3000/auth/callback' })
    },
    logout: () => {
      const keycloak = get().provider
      keycloak?.logout({ redirectUri: 'http://localhost:3000' })
    }
  }
})
