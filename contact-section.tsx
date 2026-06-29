import { Eyebrow } from '@/components/eyebrow'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export function ContactSection({
  subject,
  title = 'Entrons en relation',
}: {
  subject?: string
  title?: string
}) {
  return (
    <section id="contact" className="marble-bg py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-7 font-heading text-4xl leading-tight text-balance text-ivory md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Confiez-nous votre intention. Notre maison vous accueillera avec
            attention, écoute et la plus grande discrétion.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            <div>
              <p className="text-xs tracking-luxe text-primary uppercase">
                Email
              </p>
              <p className="mt-2 font-heading text-xl text-ivory">
                bonjour@douxchaos.com
              </p>
            </div>
            <div>
              <p className="text-xs tracking-luxe text-primary uppercase">
                Téléphone
              </p>
              <p className="mt-2 font-heading text-xl text-ivory">
                +33 1 84 80 00 00
              </p>
            </div>
            <div>
              <p className="text-xs tracking-luxe text-primary uppercase">
                Maison
              </p>
              <p className="mt-2 font-heading text-xl text-ivory">
                Paris · Sur rendez-vous
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm subject={subject} />
        </Reveal>
      </div>
    </section>
  )
}
