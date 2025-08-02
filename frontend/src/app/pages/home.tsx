import { useAuthentication } from '@/store/useAuthentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const { login, isAuthenticated } = useAuthentication((state) => state);
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
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-lg">Home</h1>
				<button
					onClick={login}
					className="px-8 py-2 rounded-lg bg-blue-500 text-white hover:cursor-pointer"
				>
					Get Started
				</button>
			</div>
		</div>
	);
}
