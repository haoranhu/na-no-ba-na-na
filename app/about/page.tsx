import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function AboutPage() {
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

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🍌</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About ImageEditor</h1>
            </div>
            <p className="text-xl text-gray-600">
              Professional image editing made simple
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ImageEditor is a powerful, user-friendly online image editing platform that makes professional photo editing accessible to everyone. Our platform offers a custom interface built on top of advanced AI models to enhance usability and provide additional features for image generation and editing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are an independent service and not affiliated with the model providers. Our mission is to democratize image editing by providing intuitive tools that work directly in your browser, with no downloads or complex software required.
              </p>
            </section>

            <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Technology Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Our platform offers a user-friendly interface built on top of models like Gemini 2.5 Flash Image to enhance usability and provide additional features.</strong> We are an independent service and not affiliated with Google or any model providers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This platform is an independent product and is not affiliated with, endorsed by, or sponsored by Google. We provide access to the Gemini 2.5 Flash Image model through our custom interface, which adds value through improved user experience, additional features, and seamless integration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AI-powered image generation and editing</li>
                <li>Browser-based processing - no downloads required</li>
                <li>Privacy-focused - images processed locally when possible</li>
                <li>Multiple image format support (JPG, PNG, GIF, WebP)</li>
                <li>Free tier with generous usage limits</li>
                <li>Professional plans for power users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Have questions or need support? We're here to help!
              </p>
              <p className="text-gray-700">
                Email us at:{' '}
                <a
                  href="mailto:fufu@nanobananaco.online"
                  className="text-banana-600 hover:text-banana-700 font-semibold"
                >
                  fufu@nanobananaco.online
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We typically respond within 24 hours during business days.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

