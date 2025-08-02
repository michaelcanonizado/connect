import { useParams } from 'react-router-dom';

export default function Chats() {
	const { id } = useParams();

	return <div>Chats {id}</div>;
}
