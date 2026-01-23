'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { FiUpload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            localStorage.setItem('uploadedImage', event.target.result as string)
            window.location.href = '/editor'
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            localStorage.setItem('uploadedImage', event.target.result as string)
            window.location.href = '/editor'
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-banana-50 via-white to-banana-50 py-20 overflow-hidden">
      {/* Banana decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12">🍌</div>
      <div className="absolute bottom-20 right-20 text-5xl opacity-20 -rotate-12">🍌</div>
      <div className="absolute top-1/2 right-10 text-4xl opacity-10 rotate-45">🍌</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Edit Images Like a{' '}
            <span className="text-banana-700 font-extrabold drop-shadow-lg" style={{ 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 200, 0, 0.3)'
            }}>
              Pro
            </span>
            <span className="inline-block ml-2">🍌</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Powerful, intuitive, and free image editing tools right in your browser.
            No downloads, no sign-ups required.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8">
            Powered by Gemini 2.5 Flash Image. Our platform offers a user-friendly interface built on top of advanced AI models to enhance usability and provide additional features. We are an independent service and not affiliated with Google.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
              dragActive
                ? 'border-banana-500 bg-banana-50 scale-105'
                : 'border-gray-300 hover:border-banana-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <FiUpload className="w-16 h-16 mx-auto text-banana-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Upload Your Image
            </h3>
            <p className="text-gray-600 mb-6">
              Drag and drop your image here, or click to browse
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center space-x-2 bg-banana-500 text-white px-8 py-3 rounded-lg hover:bg-banana-600 transition banana-shadow"
            >
              <span>Choose File</span>
              <FiArrowRight className="w-5 h-5" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            <p className="text-sm text-gray-500 mt-4">
              Supports JPG, PNG, GIF, and WebP formats
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Edit images instantly in your browser</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-lg mb-2">100% Private</h3>
            <p className="text-gray-600">Your images never leave your device</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="font-semibold text-lg mb-2">Completely Free</h3>
            <p className="text-gray-600">No hidden fees, no watermarks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

