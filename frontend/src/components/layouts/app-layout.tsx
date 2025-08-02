import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<div className="grid grid-cols-3 h-screen divide-x">
			<div className="">Sidebar</div>
			<div>
				<Outlet />
			</div>
			<div className="">Convo view</div>
		</div>
	);
}
