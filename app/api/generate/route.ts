import { NextRequest, NextResponse } from 'next/server'
import { extractImageFromContent } from '@/lib/imageUtils'
import { readFileSync } from 'fs'
import { join } from 'path'

function getApiKey(): string | null {
  // First try environment variable
  if (process.env.OPENROUTER_API_KEY) {
    return process.env.OPENROUTER_API_KEY
  }

  // Fallback: try reading from .env.local directly
  try {
    const envPath = join(process.cwd(), '.env.local')
    const envFile = readFileSync(envPath, 'utf-8')
    const match = envFile.match(/^OPENROUTER_API_KEY=(.+)$/m)
    if (match && match[1]) {
      return match[1].trim()
    }
  } catch (error) {
    console.error('Failed to read .env.local:', error)
  }

  return null
}

export async function POST(request: NextRequest) {
  try {
    // Get API key with fallback
    const apiKey = getApiKey()
    
    // Debug: Log environment variable status (without exposing the key)
    console.log('=== API Generate Debug ===')
    console.log('API Key exists:', !!apiKey)
    console.log('API Key length:', apiKey?.length || 0)
    console.log('Node environment:', process.env.NODE_ENV)
    console.log('All process.env keys:', Object.keys(process.env).length)
    
    if (!apiKey) {
      const availableEnvKeys = Object.keys(process.env).filter(k => 
        k.includes('OPEN') || k.includes('API') || k.includes('KEY')
      )
      console.error('❌ OPENROUTER_API_KEY is not set in environment variables')
      console.error('Available env vars with OPEN/API/KEY:', availableEnvKeys)
      console.error('Current working directory:', process.cwd())
      console.error('==========================================')
      
      return NextResponse.json(
        { 
          error: 'API key is not configured',
          message: 'Please ensure OPENROUTER_API_KEY is set in .env.local and restart the Next.js server',
          troubleshooting: [
            '1. Check that .env.local exists in the project root',
            '2. Verify the file contains: OPENROUTER_API_KEY=sk-or-v1-...',
            '3. Stop the server (Ctrl+C) and restart with: npm run dev',
            '4. Visit /api/test-env to verify environment variables are loaded'
          ],
          debug: {
            hasApiKey: false,
            availableKeys: availableEnvKeys,
            nodeEnv: process.env.NODE_ENV,
            cwd: process.cwd(),
          }
        },
        { status: 500 }
      )
    }
    
    console.log('✅ API Key found, proceeding with request...')

    const { image, prompt } = await request.json()

    if (!image || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      )
    }

    // Call OpenRouter API directly using fetch
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Nano Banana Image Editor',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: prompt,
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('OpenRouter API error:', response.status, errorData)
      return NextResponse.json(
        {
          error: `API request failed: ${response.status} ${response.statusText}`,
          details: errorData,
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    const responseMessage = data.choices?.[0]?.message

    if (!responseMessage) {
      return NextResponse.json(
        { error: 'No response from API', data },
        { status: 500 }
      )
    }

    // Extract image URL or base64 data from response
    const generatedImageUrl = extractImageFromContent(responseMessage.content)

    return NextResponse.json({
      success: true,
      message: responseMessage,
      imageUrl: generatedImageUrl,
      content: responseMessage.content,
    })
  } catch (error: any) {
    console.error('Error calling Gemini API:', error)
    return NextResponse.json(
      {
        error: error.message || 'Failed to generate image',
        details: error.stack || error,
      },
      { status: 500 }
    )
  }
}

