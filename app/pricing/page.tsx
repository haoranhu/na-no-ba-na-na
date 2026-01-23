import PricingTable from '@/components/PricingTable'

export const metadata = {
  title: 'Pricing - Nano Banana Image Editor',
  description: 'Choose the perfect plan for your image editing needs. Affordable pricing with powerful features.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="text-banana-700">Pricing</span>
            <span className="inline-block ml-2">🍌</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Powered by Gemini 2.5 Flash Image. Independent service, not affiliated with Google.
          </p>
        </div>
        
        <PricingTable />
      </div>
    </div>
  )
}


