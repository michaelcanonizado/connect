import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h1>404 NotFound!</h1>
			<Link to={'/chats'}>
				<button>Go back</button>
			</Link>
		</div>
	);
}
