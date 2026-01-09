import Link from 'next/link'
import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🍌</span>
              <span className="text-xl font-bold">ImageEditor</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional image editing made simple. Edit, enhance, and transform your photos online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-banana-500 transition">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-banana-500 transition">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-banana-500 transition">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-banana-500 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-banana-500 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/editor" className="hover:text-banana-500 transition">
                  Editor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-banana-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-banana-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-banana-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ImageEditor. All rights reserved. 🍌</p>
        </div>
      </div>
    </footer>
  )
}

