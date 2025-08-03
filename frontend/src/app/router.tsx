import { createBrowserRouter } from 'react-router';
import Chats from './pages/(user)/chats';
import Requests from './pages/(user)/requests';
import NotFound from './pages/not-found';
import { RouterProvider } from 'react-router-dom';
import Callback from './pages/(authentication)/callback';
import Protected from '@/features/authentication/components/protected';
import paths from './paths';
import ChatsRedirector from './pages/(user)/chats-redirector';
import Landing from './pages/landing';
import UserLayout from '@/components/layouts/user-layout';

const router = createBrowserRouter([
	{
		path: paths.landing.path,
		element: <Landing />,
	},
	{
		path: paths.authentication.callback.path,
		element: <Callback />,
	},
	{
		element: (
			<Protected>
				<UserLayout />
			</Protected>
		),
		children: [
			{
				path: paths.user.chats.root.path,
				element: <ChatsRedirector />,
			},
			{
				path: paths.user.chats.id.path,
				element: <Chats />,
			},
			{
				path: paths.user.requests.root.path,
				element: <Requests />,
			},
			{
				path: paths.user.requests.id.path,
				element: <Requests />,
			},
		],
	},
	{ path: '*', element: <NotFound /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
