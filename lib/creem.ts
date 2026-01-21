/**
 * Creem API utility functions
 * Follows DRY principle - reusable functions for Creem payment integration
 */

const CREEM_API_BASE = 'https://api.creem.io/v1'

export interface CreateCheckoutParams {
  productId: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}

export interface CheckoutResponse {
  checkout_url?: string
  url?: string
  id?: string
}

/**
 * Create a checkout session with Creem
 */
export async function createCheckoutSession(
  params: CreateCheckoutParams
): Promise<string> {
  const apiKey = process.env.CREEM_API_KEY

  if (!apiKey) {
    throw new Error('CREEM_API_KEY is not configured')
  }

  if (!params.productId) {
    throw new Error('Product ID is required')
  }

  const response = await fetch(`${CREEM_API_BASE}/checkouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      product_id: params.productId,
      success_url: params.successUrl,
      cancel_url: params.cancelUrl,
      metadata: params.metadata || {},
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Creem API error (${response.status}): ${errorText}`
    )
  }

  const data: CheckoutResponse = await response.json()

  // Creem returns checkout_url or url field
  const checkoutUrl = data.checkout_url || data.url

  if (!checkoutUrl) {
    throw new Error('No checkout URL returned from Creem API')
  }

  return checkoutUrl
}

/**
 * Verify webhook signature from Creem
 */
export function verifyWebhookSignature(
  rawBody: string,
  signature: string | null
): boolean {
  if (!signature) {
    return false
  }

  const secret = process.env.CREEM_WEBHOOK_SECRET

  if (!secret) {
    console.error('CREEM_WEBHOOK_SECRET is not configured')
    return false
  }

  // Use crypto for signature verification
  const crypto = require('crypto')
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex')

  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    )
  } catch {
    return false
  }
}

