/**
 * Utility functions for image processing
 */

/**
 * Extract image from a single image data item
 * Handles various formats: string URL/base64, object with url/data property
 */
function extractImageFromItem(item: any): string | null {
  if (!item) return null

  // If item is a string (base64 data URL or regular URL)
  if (typeof item === 'string') {
    // Check for base64 image data
    const base64Match = item.match(/data:image\/[^;]+;base64,[^\s]+/i)
    if (base64Match) return base64Match[0]
    // Check for regular image URLs
    const urlMatch = item.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg)/i)
    if (urlMatch) return urlMatch[0]
    // If it's already a data URL but not matched by regex, return as-is
    if (item.startsWith('data:image/')) return item
  }

  // If item is an object
  if (typeof item === 'object') {
    // Check for image_url type (OpenAI format)
    if (item.type === 'image_url') {
      return item.image_url?.url || null
    }

    // Check for url property
    if (item.url) {
      return extractImageFromItem(item.url) || item.url
    }

    // Check for data property
    if (item.data) {
      return extractImageFromItem(item.data) || item.data
    }

    // Check for text content with embedded image data
    if (item.type === 'text' && item.text) {
      const text = item.text
      const base64Match = text.match(/data:image\/[^;]+;base64,[^\s]+/i)
      if (base64Match) return base64Match[0]
      const urlMatch = text.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg)/i)
      if (urlMatch) return urlMatch[0]
    }
  }

  return null
}

/**
 * Extract image URL or base64 data from API response content
 */
export function extractImageFromContent(content: any): string | null {
  if (!content) return null

  const contentArray = Array.isArray(content) ? content : [content]

  for (const item of contentArray) {
    const imageUrl = extractImageFromItem(item)
    if (imageUrl) return imageUrl
  }

  return null
}

/**
 * Extract image from images array (e.g., message.images)
 */
export function extractImageFromImagesArray(images: any): string | null {
  if (!images) return null

  const imagesArray = Array.isArray(images) ? images : [images]

  for (const imageItem of imagesArray) {
    const imageUrl = extractImageFromItem(imageItem)
    if (imageUrl) return imageUrl
  }

  return null
}

/**
 * Unified function to extract image from API response
 * Checks multiple possible locations: content, images array, message.images
 */
export function extractImageFromResponse(responseData: any): string | null {
  if (!responseData) return null

  // 1. Check if imageUrl is already extracted
  if (responseData.imageUrl) {
    return responseData.imageUrl
  }

  // 2. Check message.images array (Gemini format)
  if (responseData.message?.images) {
    const imageUrl = extractImageFromImagesArray(responseData.message.images)
    if (imageUrl) return imageUrl
  }

  // 3. Check images array at root level
  if (responseData.images) {
    const imageUrl = extractImageFromImagesArray(responseData.images)
    if (imageUrl) return imageUrl
  }

  // 4. Check message.content
  if (responseData.message?.content) {
    const imageUrl = extractImageFromContent(responseData.message.content)
    if (imageUrl) return imageUrl
  }

  // 5. Check content at root level
  if (responseData.content) {
    const imageUrl = extractImageFromContent(responseData.content)
    if (imageUrl) return imageUrl
  }

  return null
}

/**
 * Convert File to base64 data URL
 */
export function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result as string)
      } else {
        reject(new Error('Failed to read file'))
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

