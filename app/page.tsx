import Hero from '@/components/Hero'
// import CaseStudies from '@/components/CaseStudies' // Temporarily removed - awaiting real case studies for compliance
// import Testimonials from '@/components/Testimonials' // Temporarily removed - awaiting real user testimonials for compliance
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <CaseStudies /> Temporarily removed - awaiting real case studies for compliance */}
      {/* <Testimonials /> Temporarily removed - awaiting real user testimonials for compliance */}
      <FAQ />
    </div>
  )
}

