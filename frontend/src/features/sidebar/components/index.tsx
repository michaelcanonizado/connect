import { cn } from '@/lib/utils';
import { MessageCircle, MessageCircleMore, Archive } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import paths from '@/app/paths';
import ProfileActions from './profile-actions';

const navLinkGroup = [
	{
		icon: <MessageCircle width={18} strokeWidth={2.5} />,
		title: 'Chats',
		href: paths.user.chats.root.path,
	},
	{
		icon: <MessageCircleMore width={18} strokeWidth={2.5} />,
		title: 'Requests',
		href: paths.user.requests.root.path,
	},
	{
		icon: <Archive width={18} strokeWidth={2.5} />,
		title: 'Archived',
		href: paths.user.archived.root.path,
	},
];

export default function Sidebar({ className }: ComponentClassNameProp) {
	return (
		<div
			className={cn(
				'bg-muted-100 flex h-full flex-col justify-between p-4',
				className
			)}
		>
			<div className="flex flex-col">
				{navLinkGroup.map((link) => {
					return (
						<NavLink
							className={({ isActive }) => {
								return cn(
									'rounded-lg p-[12px] hover:cursor-pointer ',
									isActive
										? 'bg-muted-300 text-black'
										: 'text-muted-400 hover:bg-muted-200'
								);
							}}
							key={link.title}
							to={link.href}
							caseSensitive={true}
						>
							{link.icon}
						</NavLink>
					);
				})}
			</div>
			<div className="">
				<ProfileActions />
			</div>
		</div>
	);
}
