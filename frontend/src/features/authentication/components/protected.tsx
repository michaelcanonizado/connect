import { useAuthentication } from '@/store/useAuthentication';
import { useEffect } from 'react';

export default function Protected({ children }: ComponentChildrenProp) {
	const isAuthenticated = useAuthentication((state) => state.isAuthenticated);
	const login = useAuthentication((state) => state.login);

	useEffect(() => {
		console.log('<Protected/>: isAuthenticated: ', isAuthenticated);

		if (!isAuthenticated) {
			login();
		}
	}, [isAuthenticated]);

	if (!isAuthenticated) return null;

	return children;
}
