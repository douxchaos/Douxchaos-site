import Image from 'next/image'
import { cn } from '@/lib/utils'

const LOGO_SRC = '/images/doux-chaos-logo.jpg'
const LOGO_ALT = 'Doux Chaos — Des occasions de se retrouver'

/**
 * Official Doux Chaos logo — the uploaded brand identity used exactly as
 * provided (gold symbol + DOUX CHAOS wordmark + tagline on black marble).
 * `className` controls the rendered size; object-contain preserves the
 * original proportions without distortion.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={1066}
      height={1003}
      priority
      className={cn('object-contain', className)}
    />
  )
}

/**
 * Full brand lockup — the official logo already contains the mark, the
 * wordmark and the tagline, so this simply renders the image at a larger,
 * legible size. Used in the footer, mobile menu and loading screen.
 */
export function BrandLockup({
  className,
  align = 'center',
  markClassName,
}: {
  className?: string
  align?: 'center' | 'left'
  markClassName?: string
}) {
  return (
    <div
      className={cn(
        'flex',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      <Logo className={cn('h-auto w-44', markClassName)} />
    </div>
  )
}
