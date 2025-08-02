import { useParams } from 'react-router-dom';

export default function ConvoView() {
	const { id } = useParams();

	return <div className="">Convo view. {id}</div>;
}
