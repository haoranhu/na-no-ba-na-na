/**
 * Get the site URL based on environment
 * Follows DRY principle - single source of truth for URL configuration
 */
export function getSiteUrl(): string {
  // Priority: environment variable > Vercel URL > localhost (dev only)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // In Vercel, use VERCEL_URL for preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Production URL (should be set in environment variables)
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  // Fallback to localhost only in development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }

  // If none of the above, throw error to prevent silent failures
  throw new Error(
    'Site URL not configured. Please set NEXT_PUBLIC_SITE_URL environment variable.'
  )
}

/**
 * Get the callback URL for OAuth redirects
 * Reusable function to ensure consistent callback URL across the application
 */
export function getAuthCallbackUrl(): string {
  return `${getSiteUrl()}/auth/callback`
}

/**
 * Get the origin from a request (for server-side usage)
 */
export function getOriginFromRequest(request: Request): string {
  const url = new URL(request.url)
  
  // Check for Vercel headers first
  const forwardedHost = request.headers.get('x-forwarded-host')
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https'
  
  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`
  }
  
  return url.origin
}


