import { useAuthentication } from '@/store/useAuthentication';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }: ComponentChildrenProp) {
	const isAuthenticated = useAuthentication((state) => state.isAuthenticated);

	useEffect(() => {
		console.log('<Protected/>: isAuthenticated: ', isAuthenticated);
	}, []);

	if (!isAuthenticated) {
		return <Navigate to={'/'} replace />;
	}

	return children;
}
