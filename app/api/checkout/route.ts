import { NextRequest, NextResponse } from 'next/server'
import { getSiteUrl } from '@/utils/url'

/**
 * Create Creem checkout session
 * POST /api/checkout
 */
export async function POST(request: NextRequest) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:8',message:'POST /api/checkout called',data:{hasBody:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  try {
    const body = await request.json()
    const { productId, planId, interval } = body

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:13',message:'Request body parsed',data:{productId:productId||null,planId:planId||null,interval:interval||null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.CREEM_API_KEY
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:25',message:'API key check',data:{hasApiKey:!!apiKey,apiKeyPrefix:apiKey?apiKey.substring(0,15)+'...':null,isTestKey:apiKey?.startsWith('creem_test_')||false},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    if (!apiKey) {
      console.error('CREEM_API_KEY is not set')
      return NextResponse.json(
        { error: 'Payment service is not configured' },
        { status: 500 }
      )
    }

    const siteUrl = getSiteUrl()
    const successUrl = `${siteUrl}/success`
    const cancelUrl = `${siteUrl}/pricing`

    // 根据 API Key 判断使用测试环境还是生产环境
    // creem_test_... 开头的是测试密钥，应该用 test-api.creem.io
    const baseUrl = apiKey.startsWith('creem_test_')
      ? 'https://test-api.creem.io'
      : 'https://api.creem.io'

    const creemUrl = `${baseUrl}/v1/checkouts`
    const requestBody = {
      product_id: productId,
      success_url: successUrl,
      // According to Creem API, cancel_url is not supported here.
      // We only send success_url; user can navigate back from success page if needed.
      metadata: {
        plan_id: planId || '',
        interval: interval || '',
      },
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:45',message:'Before Creem API call',data:{creemUrl,baseUrl,productId,successUrl,cancelUrl},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    // Create checkout session via Creem API
    // 根据 Creem 文档：使用 x-api-key 头部，不是 Authorization: Bearer
    const response = await fetch(creemUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey, // 使用 x-api-key，不是 Authorization: Bearer
      },
      body: JSON.stringify(requestBody),
    })

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:60',message:'Creem API response received',data:{status:response.status,statusText:response.statusText,ok:response.ok},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    const data = await response.json()

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:65',message:'Creem API response data',data:{hasCheckoutUrl:!!data.checkout_url,hasUrl:!!data.url,hasId:!!data.id,error:data.error||null,fullResponse:JSON.stringify(data).substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    if (!response.ok) {
      console.error('Creem API error:', response.status, data)
      return NextResponse.json(
        { 
          error: data.error?.message || data.message || `Failed to create checkout session (status ${response.status})`,
          details: data
        },
        { status: response.status }
      )
    }

    // Creem 可能返回 checkout_url 或 url 字段
    const checkoutUrl = data.checkout_url || data.url
    if (!checkoutUrl) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:78',message:'No checkout URL in response',data:{responseData:JSON.stringify(data)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'No checkout URL in response', details: data },
        { status: 500 }
      )
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:85',message:'Checkout URL found, returning success',data:{checkoutUrl:checkoutUrl.substring(0,50)+'...',sessionId:data.id||null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion

    return NextResponse.json({
      checkoutUrl: checkoutUrl,
      sessionId: data.id,
    })
  } catch (error: any) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d8d013d4-3d9d-4685-8a6c-49dc8695b7fc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/api/checkout/route.ts:93',message:'Exception caught',data:{errorMessage:error.message,errorStack:error.stack?.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

