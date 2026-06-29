import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Quote } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { ContactSection } from '@/components/contact-section'
import type { Universe } from '@/lib/universes'
import { universes } from '@/lib/universes'

export function UniversePage({ universe }: { universe: Universe }) {
  const others = universes.filter((u) => u.slug !== universe.slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex h-svh min-h-[560px] items-end overflow-hidden">
          <Image
            src={universe.image || '/placeholder.svg'}
            alt={universe.name}
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
            <span className="mb-6 inline-flex items-center gap-3 text-xs tracking-luxe text-primary uppercase">
              <span className="h-px w-10 bg-primary" aria-hidden />
              {universe.tagline}
            </span>
            <h1 className="max-w-3xl font-heading text-5xl leading-[0.95] text-balance text-ivory sm:text-6xl md:text-8xl">
              {universe.name}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/80">
              {universe.intro}
            </p>
          </div>
        </section>

        {/* Presentation */}
        <section className="marble-bg py-24 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>L&apos;accompagnement</Eyebrow>
              <h2 className="mt-7 font-heading text-4xl leading-tight text-balance text-ivory md:text-5xl">
                Une attention d&apos;exception, pensée pour vous
              </h2>
            </Reveal>
            <Reveal delay={150} className="flex flex-col gap-5">
              {universe.description.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-background py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="max-w-2xl">
              <Eyebrow>Les bénéfices</Eyebrow>
              <h2 className="mt-7 font-heading text-4xl text-balance text-ivory md:text-6xl">
                Ce que vous révélez
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
              {universe.benefits.map((b, i) => (
                <Reveal
                  key={i}
                  delay={i * 120}
                  className="flex flex-col bg-background p-10"
                >
                  <span className="font-heading text-5xl text-primary/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl text-ivory">
                    {b.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="marble-bg py-24 md:py-36">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
            <Quote className="mx-auto h-10 w-10 text-primary/50" />
            <blockquote className="mt-8 font-heading text-3xl leading-snug text-balance text-ivory md:text-5xl md:leading-snug">
              “{universe.testimonial.quote}”
            </blockquote>
            <div className="mt-10 flex flex-col items-center gap-4">
              <span className="relative h-16 w-16 overflow-hidden rounded-full border border-primary/40">
                <Image
                  src={universe.testimonial.image || '/placeholder.svg'}
                  alt={universe.testimonial.author}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-heading text-xl text-primary">
                  {universe.testimonial.author}
                </p>
                <p className="mt-1 text-xs tracking-wide-luxe text-muted-foreground uppercase">
                  {universe.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="relative overflow-hidden bg-background py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
            <Reveal>
              <h2 className="font-heading text-4xl text-balance text-ivory md:text-6xl">
                {universe.cta}
              </h2>
              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Offrez à cette relation l&apos;attention qu&apos;elle mérite.
                Commençons par un premier échange, en toute confidentialité.
              </p>
              <Link
                href="#contact"
                className="mt-10 inline-flex items-center border border-primary bg-primary px-10 py-4 text-xs tracking-luxe text-primary-foreground uppercase transition-all duration-500 hover:bg-transparent hover:text-primary"
              >
                Prendre rendez-vous
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <ContactSection
          subject={universe.name}
          title={`Échangeons sur ${universe.name.toLowerCase()}`}
        />

        {/* Other universes */}
        <section className="marble-bg border-t border-border py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Eyebrow>Explorer aussi</Eyebrow>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {others.map((u) => (
                <Link
                  key={u.slug}
                  href={`/${u.slug}`}
                  className="group relative block h-72 overflow-hidden border border-border"
                >
                  <Image
                    src={u.image || '/placeholder.svg'}
                    alt={u.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-7">
                    <h3 className="font-heading text-2xl text-ivory">
                      {u.name}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
