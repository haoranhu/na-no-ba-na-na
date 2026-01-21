'use client'

import { useState } from 'react'
import { pricingPlans, formatPrice, formatPriceWithInterval, type PricingPlan } from '@/utils/pricingData'
import PricingCard from './PricingCard'

export default function PricingTable() {
  const [interval, setInterval] = useState<'monthly' | 'yearly'>('monthly')

  const handleIntervalChange = (newInterval: 'monthly' | 'yearly') => {
    setInterval(newInterval)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Interval Toggle */}
      <div className="flex justify-center items-center mb-12">
        <div className="bg-white rounded-lg p-1 shadow-md inline-flex">
          <button
            onClick={() => handleIntervalChange('monthly')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              interval === 'monthly'
                ? 'bg-banana-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleIntervalChange('yearly')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              interval === 'yearly'
                ? 'bg-banana-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            interval={interval}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">
          All plans include unlimited uploads and basic editing features.
        </p>
        <p>
          Need a custom plan? <a href="/contact" className="text-banana-600 hover:underline">Contact us</a>
        </p>
      </div>
    </div>
  )
}

