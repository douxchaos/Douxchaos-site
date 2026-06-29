'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Comment se déroule un accompagnement Doux Chaos ?',
    a: 'Chaque accompagnement débute par un échange confidentiel afin de comprendre vos besoins. Nous concevons ensuite un parcours sur mesure, rythmé par des séances individuelles ou partagées, dans un cadre d\'une discrétion absolue.',
  },
  {
    q: 'Les séances se déroulent-elles en présentiel ou à distance ?',
    a: 'Nous proposons les deux formats. Nos espaces d\'accueil offrent un environnement raffiné et apaisant, tandis que nos séances à distance préservent la même qualité de présence et d\'écoute.',
  },
  {
    q: 'Mes échanges restent-ils confidentiels ?',
    a: 'La confidentialité est au cœur de notre engagement. Tout ce qui est partagé demeure strictement protégé, dans le respect absolu de votre intimité et de votre confiance.',
  },
  {
    q: 'Combien de temps dure un parcours d\'accompagnement ?',
    a: 'La durée varie selon vos objectifs et votre rythme. Certains parcours s\'étendent sur quelques semaines, d\'autres sur plusieurs mois. Nous avançons toujours à votre mesure, sans jamais précipiter le cheminement.',
  },
  {
    q: 'Comment réserver un premier rendez-vous ?',
    a: 'Il vous suffit de nous adresser un message via notre formulaire de contact. Notre maison vous répondra avec attention afin de convenir d\'un premier échange.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <div className="mb-14 text-center">
          <Eyebrow className="justify-center">Questions fréquentes</Eyebrow>
          <h2 className="mt-7 font-heading text-4xl text-balance text-ivory md:text-6xl">
            Tout ce qu&apos;il faut savoir
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span
                    className={cn(
                      'font-heading text-xl transition-colors duration-500 md:text-2xl',
                      isOpen ? 'text-primary' : 'text-ivory',
                    )}
                  >
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-500',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-700 ease-in-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
