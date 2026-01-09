'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    id: 1,
    question: 'Is ImageEditor completely free to use?',
    answer: 'Yes! ImageEditor is 100% free to use. There are no hidden fees, no watermarks, and no subscription required. All features are available to everyone.',
  },
  {
    id: 2,
    question: 'Do my images stay private?',
    answer: 'Absolutely! All image processing happens directly in your browser. Your images never leave your device and are never uploaded to our servers. Your privacy is our top priority.',
  },
  {
    id: 3,
    question: 'What image formats are supported?',
    answer: 'We support all major image formats including JPG, JPEG, PNG, GIF, and WebP. You can upload images in any of these formats and export them in your preferred format.',
  },
  {
    id: 4,
    question: 'Can I use ImageEditor on mobile devices?',
    answer: 'Yes! ImageEditor is fully responsive and works great on mobile phones, tablets, and desktop computers. The interface adapts to your screen size for the best experience.',
  },
  {
    id: 5,
    question: 'What editing features are available?',
    answer: 'ImageEditor includes a wide range of editing tools including crop, resize, rotate, filters, brightness/contrast adjustment, color correction, and more. We\'re constantly adding new features based on user feedback.',
  },
  {
    id: 6,
    question: 'Do I need to create an account?',
    answer: 'No account required! You can start editing images immediately without signing up. Just upload your image and start editing.',
  },
  {
    id: 7,
    question: 'Is there a file size limit?',
    answer: 'Since all processing happens in your browser, the file size limit depends on your device\'s memory. Generally, images up to 50MB work well, but larger files may take longer to process.',
  },
  {
    id: 8,
    question: 'Can I edit multiple images at once?',
    answer: 'Currently, ImageEditor processes one image at a time to ensure the best performance and user experience. You can edit multiple images by processing them one after another.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Banana decorations */}
      <div className="absolute top-20 left-10 text-4xl opacity-10 rotate-12">🍌</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-10 -rotate-12">🍌</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-3xl">🍌</span>
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600">
            Everything you need to know about ImageEditor
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-banana-300 transition"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-banana-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                {openId === faq.id ? (
                  <FiChevronUp className="w-5 h-5 text-banana-600 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@imgeditor.co"
            className="inline-flex items-center space-x-2 text-banana-600 hover:text-banana-700 font-semibold"
          >
            <span>Contact our support team</span>
            <span>🍌</span>
          </a>
        </div>
      </div>
    </section>
  )
}

