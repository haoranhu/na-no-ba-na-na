/**
 * Utility functions for image processing
 */

/**
 * Extract image URL or base64 data from API response content
 */
export function extractImageFromContent(content: any): string | null {
  if (!content) return null

  const contentArray = Array.isArray(content) ? content : [content]

  for (const item of contentArray) {
    // Check for image_url type
    if (typeof item === 'object' && item.type === 'image_url') {
      return item.image_url?.url || null
    }

    // Check for text with embedded image data
    if (typeof item === 'object' && item.type === 'text') {
      const text = item.text || ''
      // Look for base64 image data
      const base64Match = text.match(/data:image\/[^;]+;base64,[^\s]+/i)
      if (base64Match) return base64Match[0]
      // Look for image URLs
      const urlMatch = text.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg)/i)
      if (urlMatch) return urlMatch[0]
    }

    // Check if item is a string
    if (typeof item === 'string') {
      // Look for base64 image data
      const base64Match = item.match(/data:image\/[^;]+;base64,[^\s]+/i)
      if (base64Match) return base64Match[0]
      // Look for image URLs
      const urlMatch = item.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg)/i)
      if (urlMatch) return urlMatch[0]
    }
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

