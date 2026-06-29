'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo, BrandLockup } from '@/components/logo'
import { navLinks } from '@/lib/universes'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:h-24 md:px-10">
        {/* Logo (left) */}
        <Link
          href="/"
          aria-label="Doux Chaos — Accueil"
          className="flex shrink-0 items-center"
        >
          <Logo className="h-16 w-auto rounded-md md:h-20" />
        </Link>

        {/* Desktop nav (center) */}
        <nav className="hidden flex-1 items-center justify-center gap-x-6 gap-y-1 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-[0.7rem] tracking-wide-luxe uppercase transition-colors duration-500 hover:text-primary',
                  active ? 'text-primary' : 'text-ivory/70',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-2 left-0 h-px bg-primary transition-all duration-500',
                    active ? 'w-full' : 'w-0',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA (right) */}
        <Link
          href="/contact"
          className="hidden shrink-0 items-center justify-center border border-primary px-6 py-3 text-[0.65rem] tracking-luxe text-primary uppercase transition-all duration-500 hover:bg-primary hover:text-primary-foreground xl:inline-flex"
        >
          Réserver
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-primary transition-colors hover:text-ivory xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile / overlay menu */}
      <div
        className={cn(
          'marble-bg fixed inset-0 top-20 z-40 flex flex-col overflow-y-auto transition-all duration-700 md:top-24 xl:hidden',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-col px-8 py-10">
          {navLinks.map((link, i) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'border-b border-border/60 py-5 font-heading text-2xl transition-colors duration-500',
                  active ? 'text-primary' : 'text-ivory',
                  open && 'animate-fade-up',
                )}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className={cn(
              'mt-10 inline-flex items-center justify-center border border-primary px-6 py-4 text-xs tracking-luxe text-primary uppercase transition-all duration-500 hover:bg-primary hover:text-primary-foreground',
              open && 'animate-fade-up',
            )}
            style={{ animationDelay: `${navLinks.length * 60}ms` }}
          >
            Réserver une rencontre
          </Link>
          <BrandLockup align="left" className="mt-12" markClassName="h-auto w-48 rounded-md" />
        </nav>
      </div>
    </header>
  )
}
