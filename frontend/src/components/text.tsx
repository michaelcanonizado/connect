import { cn } from '@/lib/utils'

type props = {
  className?: string
  children?: React.ReactNode
}

export const TextHeading = ({ className, children }: props) => {
  return (
    <p
      className={cn(
        'text-[24px] leading-[28px] font-[700] tracking-[0]',
        className
      )}
    >
      {children}
    </p>
  )
}

export const TextBody = ({ className, children }: props) => {
  return (
    <p
      className={cn(
        'text-[15px] leading-[20px] font-[500] tracking-[0]',
        className
      )}
    >
      {children}
    </p>
  )
}

export const TextSub = ({ className, children }: props) => {
  return (
    <p
      className={cn(
        'text-[13px] leading-[16px] font-[400] tracking-[0]',
        className
      )}
    >
      {children}
    </p>
  )
}
