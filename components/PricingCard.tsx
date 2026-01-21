'use client'

import { useState } from 'react'
import { formatPriceWithInterval, type PricingPlan } from '@/utils/pricingData'
import { FiCheck } from 'react-icons/fi'

type PricingCardProps = {
  plan: PricingPlan
  interval: 'monthly' | 'yearly'
}

export default function PricingCard({ plan, interval }: PricingCardProps) {
  const [loading, setLoading] = useState(false)
  
  const price = interval === 'monthly' ? plan.priceMonthly : plan.priceYearly
  const priceDisplay = formatPriceWithInterval(price, interval)

  const handleGetStarted = async () => {
    // Free plan - no payment needed
    if (plan.id === 'free') {
      window.location.href = '/editor'
      return
    }

    setLoading(true)
    try {
      // Get product ID based on interval
      const productId = interval === 'monthly' 
        ? plan.productIdMonthly 
        : plan.productIdYearly

      if (!productId) {
        setLoading(false)
        // Show a more user-friendly message
        const message = `The ${plan.name} plan is currently being configured. Please check back soon or contact support for assistance.`
        if (window.confirm(message + '\n\nWould you like to be notified when it\'s available?')) {
          // You can implement a notification signup here
          console.log('User wants to be notified for plan:', plan.name)
        }
        return
      }

      // Call API to create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          planId: plan.id,
          interval,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Creem checkout page
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      alert(error.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
        plan.popular
          ? 'ring-2 ring-banana-500 transform scale-105 border-2 border-banana-500'
          : 'border border-gray-200'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-banana-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6 min-h-[3rem]">{plan.description}</p>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">{priceDisplay.split('/')[0]}</span>
            {price > 0 && (
              <span className="ml-2 text-gray-600">/{interval === 'monthly' ? 'mo' : 'yr'}</span>
            )}
          </div>
          {interval === 'yearly' && price > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              Save ${((plan.priceMonthly * 12 - price) / 100).toFixed(2)} per year
            </p>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FiCheck className="w-5 h-5 text-banana-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleGetStarted}
        disabled={loading || (plan.id !== 'free' && !plan.productIdMonthly && !plan.productIdYearly)}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          plan.popular
            ? 'bg-banana-500 text-white hover:bg-banana-600 banana-shadow'
            : plan.id === 'free'
            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            : 'bg-banana-100 text-banana-700 hover:bg-banana-200'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : plan.id === 'free' ? (
          'Get Started Free'
        ) : !plan.productIdMonthly && !plan.productIdYearly ? (
          'Coming Soon'
        ) : (
          `Get Started with ${plan.name}`
        )}
      </button>
    </div>
  )
}

