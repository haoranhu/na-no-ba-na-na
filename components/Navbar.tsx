'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiImage } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍌</span>
            <Link href="/" className="flex items-center space-x-2">
              <FiImage className="w-6 h-6 text-banana-600" />
              <span className="text-xl font-bold text-gray-900">ImageEditor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-banana-600 transition">
              Home
            </Link>
            <Link href="/editor" className="text-gray-700 hover:text-banana-600 transition">
              Editor
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-banana-600 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-banana-600 transition">
              Pricing
            </Link>
            <Link
              href="/editor"
              className="bg-banana-500 text-white px-4 py-2 rounded-lg hover:bg-banana-600 transition banana-shadow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-banana-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/editor"
              className="block px-4 py-2 text-gray-700 hover:bg-banana-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Editor
            </Link>
            <Link
              href="/features"
              className="block px-4 py-2 text-gray-700 hover:bg-banana-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-gray-700 hover:bg-banana-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="block px-4 py-2 bg-banana-500 text-white rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

