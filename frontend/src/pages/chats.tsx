import { useParams } from 'react-router-dom';

export default function Chats() {
	const { chatId } = useParams();

	return <div>Chats {chatId}</div>;
}
