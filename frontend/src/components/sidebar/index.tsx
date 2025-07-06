import React from 'react'
import { cn } from '@/lib/utils'
import { MessageCircle, MessageCircleMore, Archive } from 'lucide-react'
import Link from './link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ProfilePicture } from '../profile'

type Props = {
  className?: string
}

const linkGroup = [
  {
    icon: <MessageCircle width={18} strokeWidth={2.5} />,
    name: 'Chats',
    href: '/chats'
  },
  {
    icon: <MessageCircleMore width={18} strokeWidth={2.5} />,
    name: 'Requests',
    href: '/requests'
  },
  {
    icon: <Archive width={18} strokeWidth={2.5} />,
    name: 'Archived',
    href: '/archived'
  }
]

function ProfileActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfilePicture
          src='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D'
          name='Stego Mike'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        'bg-muted-100 flex h-full flex-col justify-between p-4',
        className
      )}
    >
      <div className='flex flex-col'>
        {linkGroup.map(link => {
          return (
            <Link key={link.name} href={link.href}>
              {link.icon}
            </Link>
          )
        })}
      </div>
      <div className=''>
        <ProfileActions />
      </div>
    </div>
  )
}
