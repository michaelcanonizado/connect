import paths from '@/app/paths';
import { useAuthentication } from '@/store/useAuthentication';
import { useUser } from '@/store/useUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children }: ComponentChildrenProp) {
	const isAuthenticated = useAuthentication((state) => state.isAuthenticated);
	const login = useAuthentication((state) => state.login);

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log('<Protected/>: isAuthenticated: ', isAuthenticated);

		if (!isAuthenticated) {
			login();
			return;
		}

		const initialize = async () => {
			try {
				await Promise.all([useUser.getState().fetchUser()]);
			} catch (error) {
				console.error('Something went wrong! ', error);
			} finally {
				setIsLoading(false);
			}
			navigate(paths.user.chats.root.path);
		};

		setIsLoading(true);
		initialize();
	}, [isAuthenticated, login]);

	if (!isAuthenticated) return null;
	if (isLoading) return <h1>Loading...</h1>;
	return children;
}
