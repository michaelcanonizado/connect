'use client'

import React from 'react'
import { default as NextJSLink } from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  children: React.ReactNode
  href: string
}

export default function Link({ className, children, href }: Props) {
  const pathname = usePathname()

  return (
    <NextJSLink href={href}>
      <div
        className={cn(
          'rounded-lg p-[12px] hover:cursor-pointer',
          pathname === href
            ? 'bg-black/5 text-black'
            : 'text-black/60 hover:bg-black/5',
          className
        )}
      >
        {children}
      </div>
    </NextJSLink>
  )
}
