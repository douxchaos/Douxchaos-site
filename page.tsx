import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSlider } from '@/components/home/hero-slider'
import { UniversesSection } from '@/components/home/universes-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { AboutSection } from '@/components/home/about-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSlider />
        <UniversesSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
