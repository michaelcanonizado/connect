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
import paths from './paths';

const router = createBrowserRouter([
	{
		path: paths.home.path,
		element: <Home />,
	},
	{
		path: paths.authentication.callback.path,
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
				path: paths.app.chats.root.path,
				element: <ChatsLoader />,
			},
			{
				path: paths.app.chats.id.path,
				element: <Chats />,
			},
			{
				path: paths.app.chats.id.path,
				element: <Requests />,
			},
		],
	},
	{ path: '*', element: <NotFound /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
