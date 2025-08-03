import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfilePicture } from '@/components/profile';
import { TextBody } from '@/components/text';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const profileActionsGroup = [
	{
		icon: <User width={16} strokeWidth={2.5} />,
		title: 'Profile',
	},
	{
		icon: <LogOut width={16} strokeWidth={2.5} />,
		title: 'Log out',
	},
];

export default function ProfileActions() {
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
								<Button
									variant="link"
									className="hover:bg-muted-100 flex h-full w-full flex-row items-center justify-start gap-3 px-2 py-1.5 hover:cursor-pointer text-inherit hover:no-underline"
								>
									<div className="size-min rounded-lg p-[6px] hover:cursor-pointer">
										{link.icon}
									</div>
									<TextBody className="">{link.title}</TextBody>
								</Button>
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
