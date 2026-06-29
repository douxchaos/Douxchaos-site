'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'

const fieldClass =
  'w-full border-0 border-b border-border bg-transparent py-4 text-ivory placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors duration-500'

export function ContactForm({ subject }: { subject?: string }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center border border-border bg-card/40 px-8 py-20 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary text-primary">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-3xl text-ivory">Merci infiniment</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Votre message a été reçu avec attention. Notre maison vous répondra
          avec le plus grand soin dans les meilleurs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {subject ? <input type="hidden" name="sujet" value={subject} /> : null}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nom"
            className="mb-1 block text-xs tracking-wide-luxe text-primary uppercase"
          >
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs tracking-wide-luxe text-primary uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="telephone"
          className="mb-1 block text-xs tracking-wide-luxe text-primary uppercase"
        >
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="+33 6 00 00 00 00"
          className={fieldClass}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-xs tracking-wide-luxe text-primary uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Partagez-nous votre intention..."
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center self-start border border-primary bg-primary px-10 py-4 text-xs tracking-luxe text-primary-foreground uppercase transition-all duration-500 hover:bg-transparent hover:text-primary"
      >
        Envoyer le message
      </button>
    </form>
  )
}
