import { createBrowserRouter } from 'react-router';
import Chats from './pages/(protected)/chats';
import Requests from './pages/(protected)/requests';
import NotFound from './pages/not-found';
import ChatsLoader from './pages/(protected)/chats-loader';
import Home from './pages/home';
import AppLayout from '@/components/layouts/app-layout';
import { RouterProvider } from 'react-router-dom';
import Callback from './pages/(authentication)/callback';
import Protected from '@/features/authentication/components/protected';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/authentication/callback',
		element: <Callback />,
	},
	{
		element: (
			<Protected>
				<AppLayout />
			</Protected>
		),
		children: [
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
		],
	},
	{ path: '*', element: <NotFound /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
