import { cn } from '@/lib/utils';
import {
	MessageCircle,
	MessageCircleMore,
	Archive,
	LogOut,
	User,
} from 'lucide-react';
import { NavLink, Link as ReactRouterLink } from 'react-router-dom';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfilePicture } from '@/components/profile';
import { TextBody } from '@/components/text';
import paths from '@/app/paths';

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

const profileActionsGroup = [
	{
		icon: <User width={16} strokeWidth={2.5} />,
		title: 'Profile',
		href: '/profile',
	},
	{
		icon: <LogOut width={16} strokeWidth={2.5} />,
		title: 'Log out',
		href: '/',
	},
];

function ProfileActionsLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<ReactRouterLink
			to={href}
			className="hover:bg-muted-100 flex h-full w-full flex-row items-center justify-start gap-3 px-2 py-1.5"
		>
			{children}
		</ReactRouterLink>
	);
}
function ProfileActionsLinkIcon({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-muted-100 size-min rounded-lg p-[6px] hover:cursor-pointer">
			{children}
		</div>
	);
}
function ProfileActionsLinkTitle({ children }: { children: React.ReactNode }) {
	return <TextBody className="">{children}</TextBody>;
}

function ProfileActions() {
	return (
		<DropdownMenu>
			<div className="flex h-full w-full flex-row items-center justify-center">
				<DropdownMenuTrigger className="hover:cursor-pointer">
					<ProfilePicture
						className="size-[32px]"
						src="https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D"
						name="Stego Mike"
					/>
				</DropdownMenuTrigger>
			</div>
			<DropdownMenuContent className="mx-4 w-[90vw] max-w-[355px]">
				{profileActionsGroup.map((link, index) => {
					return (
						<div key={index}>
							<DropdownMenuItem className="p-0">
								<ProfileActionsLink href={link.href}>
									<ProfileActionsLinkIcon>
										{link.icon}
									</ProfileActionsLinkIcon>
									<ProfileActionsLinkTitle>
										{link.title}
									</ProfileActionsLinkTitle>
								</ProfileActionsLink>
							</DropdownMenuItem>
							{index !== profileActionsGroup.length - 1 && (
								<DropdownMenuSeparator key={index} />
							)}
						</div>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

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
