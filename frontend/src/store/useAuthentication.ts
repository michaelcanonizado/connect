import type Keycloak from 'keycloak-js';
import keycloak from '@/features/authentication/lib/keycloak';
import { create } from 'zustand';
import paths from '@/app/paths';

type AuthenticationState = {
	provider: Keycloak | null;
	isAuthenticated: boolean;
	initializeProvider: () => Promise<void>;
	login: () => void;
	logout: () => void;
};

export const useAuthentication = create<AuthenticationState>((set, get) => {
	return {
		provider: null,

		isAuthenticated: false,

		initializeProvider: async () => {
			console.log('useAuthentication(): Initializing Auth');
			try {
				const authenticated = await keycloak.init({
					onLoad: 'check-sso',
					silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
					checkLoginIframe: true,
					pkceMethod: 'S256',
				});

				if (!authenticated) {
					console.log('User is not authenticated... ', keycloak);
					set({ provider: keycloak, isAuthenticated: false });
					return;
				}

				console.log('User is authenticated...');
				startTokenRefreshLoop(keycloak);

				set({
					provider: keycloak,
					isAuthenticated: true,
				});
			} catch (error) {
				console.error('Authentication Provider init failed', error);
			}
		},

		login: () => {
			const provider = get().provider;
			if (provider == null) {
				console.log('Trying to login but no authentication provider!');
				return;
			}
			provider.login({
				redirectUri: `${import.meta.env.VITE_FRONTEND_URL}${
					paths.authentication.callback.path
				}`,
			});
		},

		logout: () => {
			const provider = get().provider;
			if (provider == null) {
				console.log('Trying to login but no authentication provider!');
				return;
			}
			provider.logout({
				redirectUri: `${import.meta.env.VITE_FRONTEND_URL}/`,
			});
		},
	};
});

function startTokenRefreshLoop(keycloak: Keycloak) {
	const seconds = 60;

	setInterval(() => {
		keycloak
			.updateToken(seconds)
			.then((refreshed) => {
				if (refreshed) {
					console.log('Token refreshed');
				}
			})
			.catch(() => {
				console.error('Failed to refresh token');
				useAuthentication.getState().logout();
			});
	}, seconds * 1000); // Every 60 seconds
}
