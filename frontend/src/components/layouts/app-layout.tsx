import Logout from '@/features/authentication/components/logout';
import { Outlet } from 'react-router-dom';
import ConvoView from '../convo-view';

export default function AppLayout() {
	return (
		<div className="grid grid-cols-3 h-screen divide-x">
			<div className="flex flex-col gap-4">
				<span>Sidebar</span>
				<div>
					<Logout>Logout</Logout>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
			<ConvoView />
		</div>
	);
}
