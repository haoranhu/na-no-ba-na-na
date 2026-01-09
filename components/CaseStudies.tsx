'use client'

import { useState } from 'react'
import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    title: 'Product Photography Enhancement',
    description: 'Transformed a basic product photo into a professional marketing image with color correction and background removal.',
    before: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&sat=120&bri=110',
    category: 'E-commerce',
  },
  {
    id: 2,
    title: 'Portrait Retouching',
    description: 'Enhanced portrait photos with natural skin smoothing and color grading for a magazine-quality result.',
    before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&sat=110&bri=105',
    category: 'Portrait',
  },
  {
    id: 3,
    title: 'Social Media Optimization',
    description: 'Resized and optimized images for multiple social media platforms while maintaining quality.',
    before: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&sat=115&bri=108',
    category: 'Social Media',
  },
  {
    id: 4,
    title: 'Creative Artwork',
    description: 'Applied artistic filters and effects to create stunning visual art from ordinary photos.',
    before: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&sat=130&bri=115',
    category: 'Art',
  },
  {
    id: 5,
    title: 'Real Estate Staging',
    description: 'Enhanced property photos with brightness adjustment and perspective correction for better listings.',
    before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&sat=110&bri=112',
    category: 'Real Estate',
  },
  {
    id: 6,
    title: 'Food Photography',
    description: 'Made food photos more appetizing with color enhancement and selective focus effects.',
    before: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&sat=120&bri=110',
    category: 'Food',
  },
]

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'E-commerce', 'Portrait', 'Social Media', 'Art', 'Real Estate', 'Food']

  const filteredStudies =
    selectedCategory === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-3xl">🍌</span>
            <h2 className="text-4xl font-bold text-gray-900">Case Studies</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our users transform their images with our powerful editing tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category
                  ? 'bg-banana-500 text-white banana-shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden group">
                <div className="absolute inset-0 flex">
                  {/* Before Image */}
                  <div className="w-1/2 relative border-r-2 border-white">
                    <Image
                      src={study.before}
                      alt={`${study.title} - Before`}
                      fill
                      className="object-cover opacity-100 group-hover:opacity-80 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                  </div>
                  {/* After Image */}
                  <div className="w-1/2 relative">
                    <Image
                      src={study.after}
                      alt={`${study.title} - After`}
                      fill
                      className="object-cover opacity-100 group-hover:opacity-80 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-2 right-2 bg-banana-500 bg-opacity-90 text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-banana-100 text-banana-700 rounded-full text-sm mb-3">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

