import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined'

  if (!supabaseUrl || !supabaseKey) {
    // During build/SSR (when window is undefined), allow build to continue
    // but return a client that will fail gracefully at runtime
    if (!isBrowser) {
      // Return a client with placeholder values for build-time
      // This prevents build failures while still allowing the code to compile
      return createBrowserClient(
        supabaseUrl || 'https://placeholder.supabase.co',
        supabaseKey || 'placeholder-anon-key'
      )
    }
    // In browser, throw error so developers know to configure environment variables
    throw new Error(
      'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.'
    )
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}


