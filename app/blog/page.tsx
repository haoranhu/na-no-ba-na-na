import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-banana-600 hover:text-banana-700 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-4xl">🍌</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Blog</h1>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Our blog is coming soon! We'll be sharing tips, tutorials, and updates about image editing and AI technology.
            </p>
            
            <div className="bg-banana-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                In the meantime, check out our other resources:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/features"
                  className="inline-flex items-center text-banana-600 hover:text-banana-700 font-semibold"
                >
                  View Features
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center text-banana-600 hover:text-banana-700 font-semibold"
                >
                  View Pricing
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Want to stay updated? Contact us at{' '}
              <a
                href="mailto:fufu@nanobananaco.online"
                className="text-banana-600 hover:text-banana-700 font-semibold"
              >
                fufu@nanobananaco.online
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

