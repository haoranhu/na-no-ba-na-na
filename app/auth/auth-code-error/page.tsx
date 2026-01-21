import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">🍌</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Error</h1>
        <p className="text-gray-600 mb-6">
          There was an error during authentication. Please try again.
        </p>
        <Link
          href="/"
          className="inline-block bg-banana-500 text-white px-6 py-3 rounded-lg hover:bg-banana-600 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}



