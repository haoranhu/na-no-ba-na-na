import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

/**
 * Verify Creem webhook signature
 */
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    const hmac = crypto.createHmac('sha256', secret)
    const digest = hmac.update(payload).digest('hex')
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(digest)
    )
  } catch {
    return false
  }
}

/**
 * Handle Creem webhooks
 * POST /api/webhooks/creem
 */
export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.CREEM_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('CREEM_WEBHOOK_SECRET is not set')
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      )
    }

    // Get raw body for signature verification
    const payload = await request.text()
    const signature = request.headers.get('creem-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    const isValid = verifyWebhookSignature(payload, signature, webhookSecret)
    if (!isValid) {
      console.error('Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const event = JSON.parse(payload)

    // Handle different webhook events
    switch (event.type) {
      case 'checkout.completed':
        await handleCheckoutCompleted(event.data)
        break

      case 'subscription.activated':
      case 'access.granted':
        await handleAccessGranted(event.data)
        break

      case 'subscription.cancelled':
      case 'subscription.expired':
      case 'access.revoked':
        await handleAccessRevoked(event.data)
        break

      default:
        console.log(`Unhandled webhook event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: error.message || 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

/**
 * Handle checkout completed event
 */
async function handleCheckoutCompleted(data: any) {
  const { customer, product, metadata } = data
  
  console.log('Checkout completed:', {
    customerEmail: customer?.email,
    productId: product?.id,
    productName: product?.name,
    planId: metadata?.plan_id,
    interval: metadata?.interval,
  })

  // TODO: Grant user access to the plan
  // Example: Update user subscription in database
  // await updateUserSubscription(customer.email, metadata.plan_id, metadata.interval)
}

/**
 * Handle access granted event
 */
async function handleAccessGranted(data: any) {
  const { customer, product, metadata } = data
  
  console.log('Access granted:', {
    customerEmail: customer?.email,
    productId: product?.id,
    planId: metadata?.plan_id,
  })

  // TODO: Grant user access
  // await grantUserAccess(customer.email, metadata.plan_id)
}

/**
 * Handle access revoked event
 */
async function handleAccessRevoked(data: any) {
  const { customer, product, metadata } = data
  
  console.log('Access revoked:', {
    customerEmail: customer?.email,
    productId: product?.id,
    planId: metadata?.plan_id,
  })

  // TODO: Revoke user access
  // await revokeUserAccess(customer.email, metadata.plan_id)
}


