import Link from 'next/link'
import { FiArrowLeft, FiZap, FiLock, FiImage, FiDownload, FiSparkles } from 'react-icons/fi'

export default function FeaturesPage() {
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'AI-Powered Generation',
      description: 'Generate stunning images using advanced AI models. Our platform uses Gemini 2.5 Flash Image to create high-quality images from your prompts.',
    },
    {
      icon: <FiImage className="w-8 h-8" />,
      title: 'Professional Editing',
      description: 'Edit and enhance your images with powerful tools. Crop, resize, adjust colors, and apply filters all in your browser.',
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'Your images are processed securely. We prioritize your privacy and don\'t store your images permanently unless you save them.',
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: 'Multiple Formats',
      description: 'Support for JPG, PNG, GIF, and WebP formats. Export your edited images in your preferred format.',
    },
    {
      icon: <FiSparkles className="w-8 h-8" />,
      title: 'No Watermarks',
      description: 'Free tier users get watermarked downloads, while premium users enjoy watermark-free high-resolution exports.',
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Fast Processing',
      description: 'Lightning-fast image processing powered by advanced AI. Get results in seconds, not minutes.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-banana-600 hover:text-banana-700 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-4xl">🍌</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Features</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make ImageEditor the perfect tool for all your image editing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="text-banana-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Choose a plan that fits your needs and start creating amazing images today.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center bg-banana-500 text-white px-8 py-3 rounded-lg hover:bg-banana-600 transition banana-shadow font-semibold"
            >
              View Pricing Plans
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mt-8">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> Our platform is an independent product and is not affiliated with, endorsed by, or sponsored by Google. We provide access to AI models (including Gemini 2.5 Flash Image) through our custom interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

