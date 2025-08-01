import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function mockApiCall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([{ id: 'ba23ab15-84ec-4704-8b98-481a641f06b7' }]);
		}, 1000);
	});
}

type Chat = {
	id: string;
};

export default function ChatsLoader() {
	const [isLoading, setIsLoading] = useState(true);
	const [initialChatId, setInitialChatId] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		setIsLoading(true);
		mockApiCall()
			.then((data) => {
				/* IMPORTANT: Verify data comming from backend and determine
                 whether we need to fetch many chats or just the recent-most
                 chat as only 1 chat id is required */
				const parsedData = data as Chat[];

				if (isMounted) {
					setIsLoading(false);
					setInitialChatId(parsedData[0].id);
				}
			})
			.catch((error) => {
				console.log(error);
			});

		return () => {
			isMounted = false;
		};
	});

	if (isLoading || !initialChatId) {
		return <div>Loading...</div>;
	}

	return <Navigate to={`/chats/${initialChatId}`} />;
}
