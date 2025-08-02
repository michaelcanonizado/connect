import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/chats');
	}, []);

	return <div>Logging you in...</div>;
}
