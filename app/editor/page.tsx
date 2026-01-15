'use client'

import { useState, useEffect } from 'react'
import { FiUpload, FiX, FiZap, FiLoader } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { useImageUpload } from '@/hooks/useImageUpload'
import { extractImageFromResponse } from '@/lib/imageUtils'

interface GeneratedImage {
  id: string
  url: string
  prompt: string
  timestamp: number
}

export default function EditorPage() {
  const {
    image,
    imageFile,
    fileInputRef,
    handleDrop,
    handleFileInput,
    openFileDialog,
    reset: resetImage,
    setImage,
  } = useImageUpload()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if there's an image in localStorage from the upload
    const storedImage = localStorage.getItem('uploadedImage')
    if (storedImage) {
      setImage(storedImage)
      localStorage.removeItem('uploadedImage')
    }
  }, [setImage])

  const handleGenerate = async () => {
    if (!image || !prompt.trim()) {
      setError('Please upload an image and enter a prompt')
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image,
          prompt: prompt.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image')
      }

      // Handle the response - use unified extraction function to check all possible locations
      const imageUrl = extractImageFromResponse(data)

      if (imageUrl) {
        const newImage: GeneratedImage = {
          id: Date.now().toString(),
          url: imageUrl,
          prompt: prompt.trim(),
          timestamp: Date.now(),
        }
        setGeneratedImages((prev) => [newImage, ...prev])
      } else {
        // If no image URL found, show the text response for debugging
        console.log('API Response:', data)
        setError('No image found in API response. The API might have returned text instead of an image. Check console for details.')
      }
    } catch (err: any) {
      console.error('Generation error:', err)
      setError(err.message || 'Failed to generate image. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadGenerated = (imageUrl: string, prompt: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `generated-${prompt.slice(0, 20).replace(/\s+/g, '-')}-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!image) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-banana-50 via-white to-banana-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-6">🍌</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Image</h1>
            <p className="text-gray-600 mb-8">
              Drag and drop your image here, or click to browse
            </p>
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-banana-500 transition cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={openFileDialog}
            >
              <FiUpload className="w-16 h-16 mx-auto text-banana-500 mb-4" />
              <p className="text-gray-700 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PNG, JPG, GIF, WebP up to 50MB</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            <Link
              href="/"
              className="inline-block mt-6 text-banana-600 hover:text-banana-700 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍌</span>
              <h1 className="text-xl font-bold text-gray-900">Nano Banana Image Editor</h1>
            </div>
            <button
              onClick={() => {
                resetImage()
                setPrompt('')
                setGeneratedImages([])
                setError(null)
              }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <FiX className="w-4 h-4" />
              <span>Upload New Image</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input Image and Prompt */}
          <div className="lg:col-span-1 space-y-6">
            {/* Uploaded Image Preview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📤</span>
                Uploaded Image
              </h2>
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {image && (
                  <Image
                    src={image}
                    alt="Uploaded"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
            </div>

            {/* Main Prompt Input */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">✍️</span>
                Main Prompt
              </h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here... (e.g., 'Make this image more vibrant', 'Add a sunset background', 'Remove the background')"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-banana-500 focus:border-transparent resize-none"
                disabled={isGenerating}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim() || !image}
                className="w-full mt-4 flex items-center justify-center space-x-2 bg-banana-500 text-white px-6 py-3 rounded-lg hover:bg-banana-600 transition banana-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <FiLoader className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <FiZap className="w-5 h-5" />
                    <span>Generate Now</span>
                  </>
                )}
              </button>
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Output Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🖼️</span>
                Output Gallery
              </h2>
              {generatedImages.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4 opacity-20">🍌</div>
                  <p className="text-gray-500 text-lg">
                    Generated images will appear here
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Upload an image, enter a prompt, and click "Generate Now"
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {generatedImages.map((img) => (
                    <div
                      key={img.id}
                      className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
                    >
                      <div className="relative w-full aspect-square bg-gray-100">
                        <Image
                          src={img.url}
                          alt={img.prompt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {img.prompt}
                        </p>
                        <button
                          onClick={() => handleDownloadGenerated(img.url, img.prompt)}
                          className="w-full mt-2 px-4 py-2 bg-banana-500 text-white rounded-lg hover:bg-banana-600 transition text-sm"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
