import React from 'react'
import { cn } from '@/lib/utils'
import { MessageCircle, MessageCircleMore, Archive } from 'lucide-react'
import Link from './link'

type props = {
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

export default function Sidebar({ className }: props) {
  return (
    <div className={cn('bg-muted h-screen p-4', className)}>
      {linkGroup.map(link => {
        return (
          <Link key={link.name} href={link.href}>
            {link.icon}
          </Link>
        )
      })}
    </div>
  )
}
