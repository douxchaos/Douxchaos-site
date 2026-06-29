import Link from 'next/link'
import { BrandLockup } from '@/components/logo'
import { navLinks } from '@/lib/universes'

const socials = [
  {
    label: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z',
  },
  {
    label: 'Facebook',
    path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
  },
  {
    label: 'LinkedIn',
    path: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.81a1.55 1.55 0 10-1.55-1.55A1.55 1.55 0 007 8.81zm11.34 9.53v-4.58c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 00-2.39 1.31v-1.12H10.2v8.35h2.67v-4.41c0-1.16.22-2.29 1.66-2.29s1.45 1.33 1.45 2.36v4.34h2.67z',
  },
]

export function SiteFooter() {
  return (
    <footer className="marble-bg border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="Doux Chaos — Accueil">
              <BrandLockup align="left" markClassName="h-auto w-52 rounded-md" />
            </Link>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              L&apos;art des relations humaines. Un accompagnement d&apos;exception
              pour le couple, l&apos;amitié, la famille, la parentalité et
              l&apos;épanouissement de soi.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={`Doux Chaos sur ${social.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 text-xs tracking-luxe text-primary uppercase">
                Univers
              </h3>
              <ul className="flex flex-col gap-3">
                {navLinks.slice(1, 6).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/70 transition-colors duration-500 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-xs tracking-luxe text-primary uppercase">
                Maison
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/a-propos"
                    className="text-sm text-ivory/70 transition-colors duration-500 hover:text-primary"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-ivory/70 transition-colors duration-500 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-xs tracking-luxe text-primary uppercase">
                Légal
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-ivory/70 transition-colors duration-500 hover:text-primary"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-ivory/70 transition-colors duration-500 hover:text-primary"
                  >
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gold-divider my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs tracking-wide-luxe text-muted-foreground">
            © {new Date().getFullYear()} Doux Chaos. Tous droits réservés.
          </p>
          <p className="text-xs tracking-wide-luxe text-muted-foreground">
            Conçu avec élégance et émotion.
          </p>
        </div>
      </div>
    </footer>
  )
}
