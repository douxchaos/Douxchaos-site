import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const base =
  'group relative inline-flex items-center justify-center px-9 py-4 text-xs tracking-luxe uppercase transition-all duration-500'

const variants = {
  solid:
    'border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary',
  outline:
    'border border-primary/50 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground',
  ghost:
    'border-b border-primary/40 px-0 pb-2 text-primary hover:border-primary',
}

export function GoldButtonLink({
  href,
  children,
  variant = 'solid',
  className,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}
