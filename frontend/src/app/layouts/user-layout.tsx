import { Outlet } from 'react-router-dom';
import ConvoView from '../../components/convo-view';
import Sidebar from '@/features/sidebar/components';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function UserLayout({ className }: ComponentClassNameProp) {
	return (
		<div className={cn('flex h-screen', className)}>
			<Sidebar />
			<div className="bg-muted-100 flex grow gap-4 py-4 pr-4">
				<Card
					className={cn(
						'bg-background min-w-[300px] flex-[1_1_480px] pb-0 md:flex md:max-w-[480px]'
						// isConversationViewActive ? 'hidden' : ''
					)}
				>
					<Outlet />
				</Card>
				<Card
					className={cn(
						'bg-background custom:bg-red-500 flex-[1_1_960px] p-0'
						// isConversationViewActive ? '' : 'hidden'
					)}
				>
					<ConvoView />
				</Card>
			</div>
		</div>
	);
}
