'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiUser, FiCreditCard, FiSettings } from 'react-icons/fi'
import { createClient } from '@/utils/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
  }, [])

  const handleManageSubscription = () => {
    // Redirect to Creem Customer Portal
    // Replace with your actual Creem Customer Portal URL
    // For now, we'll redirect to contact page with instructions
    window.location.href = 'https://creem.io/customer-portal'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-banana-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign In Required</h1>
            <p className="text-gray-600 mb-6">
              Please sign in to access your account and manage your subscription.
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-banana-600 hover:text-banana-700 font-semibold"
            >
              <FiArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">My Account</h1>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-banana-50 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-4">
              {user.user_metadata?.avatar_url ? (
                <img
                  src={user.user_metadata.avatar_url}
                  alt={user.email || 'User'}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-banana-200 flex items-center justify-center">
                  <FiUser className="w-8 h-8 text-banana-700" />
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {user.user_metadata?.full_name || 'User'}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Subscription Management */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FiCreditCard className="w-6 h-6 text-banana-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Subscription Management</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Manage your subscription, update payment methods, or cancel your subscription.
              </p>
              <button
                onClick={handleManageSubscription}
                className="inline-flex items-center bg-banana-500 text-white px-6 py-3 rounded-lg hover:bg-banana-600 transition font-semibold"
              >
                <FiSettings className="w-5 h-5 mr-2" />
                Manage Subscription
              </button>
              <p className="text-sm text-gray-500 mt-4">
                You will be redirected to the Creem Customer Portal where you can manage all aspects of your subscription.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-700 text-sm mb-2">
              If you have questions about your subscription or need assistance, please contact us:
            </p>
            <a
              href="mailto:fufu@nanobananaco.online"
              className="text-banana-600 hover:text-banana-700 font-semibold text-sm"
            >
              fufu@nanobananaco.online
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

