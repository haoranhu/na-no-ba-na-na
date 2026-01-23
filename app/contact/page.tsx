import Link from 'next/link'
import { FiArrowLeft, FiMail, FiClock } from 'react-icons/fi'

export default function ContactPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
            </div>
            <p className="text-xl text-gray-600">
              We're here to help! Get in touch with our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-banana-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FiMail className="w-6 h-6 text-banana-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Email Support</h2>
              </div>
              <p className="text-gray-700 mb-4">
                For questions, technical support, or general inquiries, please email us:
              </p>
              <a
                href="mailto:fufu@nanobananaco.online"
                className="inline-flex items-center text-banana-600 hover:text-banana-700 font-semibold text-lg"
              >
                fufu@nanobananaco.online
              </a>
            </div>

            <div className="bg-banana-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FiClock className="w-6 h-6 text-banana-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Response Time</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We typically respond to all inquiries within:
              </p>
              <p className="text-banana-600 font-semibold text-lg">
                24 hours (business days)
              </p>
              <p className="text-gray-600 text-sm mt-2">
                For urgent matters, please mark your email as "Urgent" in the subject line.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-6">
              Before contacting us, you might find the answer to your question in our FAQ section.
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center text-banana-600 hover:text-banana-700 font-semibold"
            >
              View FAQ Section
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">Refund Requests</h3>
            <p className="text-gray-700 text-sm">
              For refund requests, please email us at{' '}
              <a
                href="mailto:fufu@nanobananaco.online"
                className="text-banana-600 hover:text-banana-700 font-semibold"
              >
                fufu@nanobananaco.online
              </a>
              {' '}with your account email and subscription details. We commit to responding within 3 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

