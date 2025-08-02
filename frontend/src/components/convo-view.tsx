import { useParams } from 'react-router-dom';

export default function ConvoView() {
	const { chatId } = useParams();

	return <div className="">Convo view. {chatId}</div>;
}
