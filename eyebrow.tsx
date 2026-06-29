import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs tracking-luxe text-primary uppercase',
        className,
      )}
    >
      <span className="h-px w-8 bg-primary/60" aria-hidden />
      {children}
    </span>
  )
}
