/**
 * Pricing plans configuration
 * Follows DRY principle - single source of truth for pricing data
 */

export type PricingPlan = {
  id: string
  name: string
  description: string
  priceMonthly: number // in cents
  priceYearly: number // in cents
  features: string[]
  popular?: boolean
  productIdMonthly?: string // Creem product ID for monthly subscription
  productIdYearly?: string // Creem product ID for yearly subscription
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for trying out our service',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      '2 image generations per month',
      'Standard quality outputs',
      'Basic editing tools',
      'Watermarked downloads',
      'Community support',
    ],
  },
  {
    id: 'creator',
    name: 'Creator',
    description: 'Great for individuals shipping work every day',
    priceMonthly: 1999, // $19.99
    priceYearly: 19190, // $191.90 (save ~$48/year, ~20% off)
    features: [
      '500 credits per month',
      '~250 image generations (2 credits per generation)',
      'Access to all editing modes & presets',
      'High-resolution downloads',
      'No watermarks',
      'Email support <24h',
      'Priority processing',
    ],
    popular: true,
    // Creem Product IDs (replace with your real product IDs in production)
    // 你现在提供的 productId 是 prod_5GltmMtXszLiz8UdRBPVOT，这里先同时用于月付和年付
    productIdMonthly: 'prod_5GltmMtXszLiz8UdRBPVOT',
    productIdYearly: 'prod_5GltmMtXszLiz8UdRBPVOT',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For professionals and power users',
    priceMonthly: 2999, // $29.99
    priceYearly: 28790, // $287.90 (save ~$72/year, ~20% off)
    features: [
      '1,000 credits per month',
      '~500 image generations (2 credits per generation)',
      'All Creator features',
      'Premium presets & filters',
      'Batch processing',
      'API access',
      'Priority support <4h',
      'Advanced AI models',
      'Commercial license',
    ],
    // TODO: Replace with actual Creem Product IDs after creating products in Creem Dashboard
    // productIdMonthly: 'prod_xxx_pro_monthly',
    // productIdYearly: 'prod_xxx_pro_yearly',
  },
]

/**
 * Format price in cents to display string
 */
export function formatPrice(cents: number): string {
  if (cents === 0) return 'Free'
  return `$${(cents / 100).toFixed(2)}`
}

/**
 * Format price with interval
 */
export function formatPriceWithInterval(cents: number, interval: 'monthly' | 'yearly'): string {
  if (cents === 0) return 'Free'
  const price = formatPrice(cents)
  return interval === 'monthly' ? `${price}/mo` : `${price}/yr`
}

