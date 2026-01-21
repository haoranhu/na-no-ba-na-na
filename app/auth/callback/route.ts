import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { getOriginFromRequest } from '@/utils/url'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/'
  
  // Use reusable function to get correct origin (handles Vercel headers)
  const origin = getOriginFromRequest(request)

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Always use the correct origin from request (handles Vercel rewrites)
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}


