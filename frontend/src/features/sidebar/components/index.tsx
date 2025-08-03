import { cn } from '@/lib/utils';
import {
	MessageCircle,
	MessageCircleMore,
	Archive,
	type LucideIcon,
} from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';
import paths from '@/app/paths';
import ProfileActions from './profile-actions';

type Link = {
	icon: LucideIcon;
	title: string;
	href: string;
};

const links: Link[] = [
	{
		icon: MessageCircle,
		title: 'Chats',
		href: paths.user.chats.root.path,
	},
	{
		icon: MessageCircleMore,
		title: 'Requests',
		href: paths.user.requests.root.path,
	},
	{
		icon: Archive,
		title: 'Archived',
		href: paths.user.archived.root.path,
	},
];

export default function Sidebar({ className }: ComponentClassNameProp) {
	const { id } = useParams();

	return (
		<div
			className={cn(
				'bg-muted-100 flex h-full flex-col justify-between p-4',
				className
			)}
		>
			<div className="flex flex-col">
				{links.map((link) => {
					const finalizedPath = id ? `${link.href}/${id}` : link.href;

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
							to={finalizedPath}
							caseSensitive={true}
						>
							<link.icon width={18} strokeWidth={2.5} />
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
