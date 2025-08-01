import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<div className="grid grid-cols-3 h-screen">
			<div className="bg-red-400">Sidebar</div>
			<div>
				<Outlet />
			</div>
			<div className="bg-red-400">Convo view</div>
		</div>
	);
}
