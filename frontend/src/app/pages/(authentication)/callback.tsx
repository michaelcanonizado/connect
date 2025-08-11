import paths from '@/app/paths';
import { useUser } from '@/store/useUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
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
	}, []);

	if (isLoading) {
		return <div>Logging you in...</div>;
	}
}
