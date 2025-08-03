import paths from '@/app/paths';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(paths.user.chats.root.path);
	}, []);

	return <div>Logging you in...</div>;
}
