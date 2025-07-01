import React from 'react'
import { cn } from '@/lib/utils'
import { MessageCircle, MessageCircleMore, Archive } from 'lucide-react'
import Link from 'next/link'

type props = {
  className?: string
}

const linkGroup = [
  {
    icon: <MessageCircle width={18} />,
    name: 'Chats',
    href: '/chats'
  },
  {
    icon: <MessageCircleMore width={18} />,
    name: 'Requests',
    href: '/requests'
  },
  {
    icon: <Archive width={18} />,
    name: 'Archived',
    href: '/archived'
  }
]

export default function Sidebar({ className }: props) {
  return (
    <div className={cn('bg-muted h-screen p-4', className)}>
      {linkGroup.map(link => {
        return (
          <Link href={link.href} key={link.name}>
            <div className='rounded-lg p-[12px] hover:cursor-pointer hover:bg-black/5'>
              {link.icon}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
