import Login from '@/features/authentication/components/login';
import { useAuthentication } from '@/store/useAuthentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const isAuthenticated = useAuthentication((state) => state.isAuthenticated);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			const redirectRoute = '/chats';
			console.log('User already logged in! Redirecting to ', redirectRoute);
			navigate(redirectRoute);
		}
	}, []);

	return (
		<div className="h-screen grid place-items-center">
			<div>
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-lg">Home</h1>
				</div>
				<Login>Get Started</Login>
			</div>
		</div>
	);
}
