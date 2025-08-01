import { createBrowserRouter } from 'react-router';
import Chats from './pages/chats';
import Requests from './pages/requests';
import NotFound from './pages/not-found';
import ChatsLoader from './pages/chats-loader';

const router = createBrowserRouter([
	{
		path: '/chats',
		element: <ChatsLoader />,
	},
	{
		path: '/chats/:chatId',
		element: <Chats />,
	},
	{
		path: '/requests',
		element: <Requests />,
	},
	{ path: '*', element: <NotFound /> },
]);

export default router;
