import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function mockApiCall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([{ id: 'ba23ab15-84ec-4704-8b98-481a641f06b7' }]);
		}, 1500);
	});
}

export default function Chats() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);

		console.log('Getting users...');
		/* IMPORTANT: API call is being ran twice on /chats,
		   due to it needing the recent most message. Fix Soon! */
		mockApiCall()
			.then((data) => {
				const parsedData = data as Chat[];

				if (!id) {
					setIsLoading(false);
					navigate(`/chats/${parsedData[0].id}`, { replace: true });
				}

				setData(parsedData[0].id);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (isLoading && !id) {
		return <div>Loading...</div>;
	}

	return <div>Chats {data}</div>;
}
