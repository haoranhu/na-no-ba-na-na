import Hero from '@/components/Hero'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </div>
  )
}

