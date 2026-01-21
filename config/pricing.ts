/**
 * Pricing configuration
 * Follows DRY principle - single source of truth for all pricing plans
 */

export type PlanKey = 'free' | 'pro-monthly' | 'pro-yearly'

export interface Plan {
  key: PlanKey
  title: string
  description: string
  price: number // in USD
  interval: 'month' | 'year' | 'one-time'
  creemProductId: string // Product ID from Creem Dashboard
  features: string[]
  isFeatured?: boolean
  badge?: string // e.g., "Popular", "Best Value"
}

export const plans: Plan[] = [
  {
    key: 'free',
    title: 'Free',
    description: 'Perfect for trying out our image editor',
    price: 0,
    interval: 'one-time',
    creemProductId: '', // No payment needed for free plan
    features: [
      '5 AI edits per month',
      'Basic editing tools',
      'Standard quality exports',
      'Community support',
    ],
  },
  {
    key: 'pro-monthly',
    title: 'Pro',
    description: 'Best for individuals using the product every day',
    price: 9.99,
    interval: 'month',
    creemProductId: process.env.NEXT_PUBLIC_CREEM_PRODUCT_MONTHLY || 'prod_monthly_placeholder',
    features: [
      'Unlimited AI edits',
      'Priority processing',
      'High-quality exports',
      'All premium features',
      'Email support',
    ],
    isFeatured: true,
    badge: 'Popular',
  },
  {
    key: 'pro-yearly',
    title: 'Pro Yearly',
    description: 'Save 20% with annual billing',
    price: 95.99,
    interval: 'year',
    creemProductId: process.env.NEXT_PUBLIC_CREEM_PRODUCT_YEARLY || 'prod_yearly_placeholder',
    features: [
      'Everything in Pro',
      'Unlimited AI edits',
      'Priority processing',
      'Highest quality exports',
      'All premium features',
      'Priority email support',
      'Early access to new features',
    ],
    badge: 'Best Value',
  },
]

// Helper function to get plan by key
export function getPlanByKey(key: PlanKey): Plan | undefined {
  return plans.find((plan) => plan.key === key)
}

// Helper function to calculate savings percentage
export function calculateSavings(monthlyPrice: number, yearlyPrice: number): number {
  const monthlyTotal = monthlyPrice * 12
  const savings = monthlyTotal - yearlyPrice
  return Math.round((savings / monthlyTotal) * 100)
}

