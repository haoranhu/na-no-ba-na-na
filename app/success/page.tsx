'use client'

import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FiCheckCircle, FiLoader } from 'react-icons/fi'

function SuccessContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // Verify the session if needed
    if (sessionId) {
      // You can fetch session details from your API
      setTimeout(() => setLoading(false), 1500)
    } else {
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 flex items-center justify-center">
        <div className="text-center">
          <FiLoader className="w-16 h-16 mx-auto text-banana-500 animate-spin mb-4" />
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <FiCheckCircle className="w-20 h-20 mx-auto text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful! 🎉
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your subscription has been activated.
          </p>
        </div>

        {sessionId && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Session ID: <span className="font-mono text-xs">{sessionId}</span>
            </p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/editor"
            className="block w-full bg-banana-500 text-white px-6 py-3 rounded-lg hover:bg-banana-600 transition banana-shadow font-semibold"
          >
            Start Editing Images
          </Link>
          <Link
            href="/"
            className="block w-full text-gray-700 hover:text-gray-900 transition"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Link href="/contact" className="text-banana-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 flex items-center justify-center">
        <div className="text-center">
          <FiLoader className="w-16 h-16 mx-auto text-banana-500 animate-spin mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

