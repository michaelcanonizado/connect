import keycloak from '@/lib/keycloak'
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
  return {
    provider: null,

    isInitialized: false,

    initializeProvider: async () => {
      const storedToken = localStorage.getItem('kc_token')
      const storedRefreshToken = localStorage.getItem('kc_refresh_token')

      const authenticated = await keycloak
        .init({
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/silent-check-sso.html',
          checkLoginIframe: true,
          pkceMethod: 'S256',
          token: storedToken ? storedToken : undefined,
          refreshToken: storedRefreshToken ? storedRefreshToken : undefined
        })
        .catch(error => {
          set({ provider: null, isInitialized: false })
          console.error('Keycloak initialization error!', error)
        })

      set({ provider: keycloak, isInitialized: true })

      if (!authenticated) {
        console.log('Not Authenticated!', keycloak)
        return
      }

      console.log('Authenticated! ', keycloak)
      // store tokens to persist them
      localStorage.setItem('kc_token', keycloak.token!)
      localStorage.setItem('kc_refresh_token', keycloak.refreshToken!)

      // update on token refresh
      keycloak.onAuthRefreshSuccess = () => {
        localStorage.setItem('kc_token', keycloak.token!)
        localStorage.setItem('kc_refresh_token', keycloak.refreshToken!)
      }

      keycloak.onTokenExpired = () => {
        keycloak.updateToken(30)
      }
    },

    login: () => {
      const provider = get().provider

      if (provider == null) {
        console.log('Trying to login but no keycloak instance!')
        return
      }

      provider.login({ redirectUri: 'http://localhost:3000/login/callback' })
    },

    logout: () => {
      const provider = get().provider

      if (provider == null) {
        console.log('Trying to login but no keycloak instance!')
        return
      }

      provider.logout({ redirectUri: 'http://localhost:3000' })
    }
  }
})
