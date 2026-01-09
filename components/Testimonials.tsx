'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Photographer',
    company: 'Creative Studio',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'This is the best online image editor I\'ve used. The interface is intuitive and the results are professional. Perfect for quick edits on the go!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'E-commerce Manager',
    company: 'Shopify Store',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'I use this tool daily to edit product photos. It\'s fast, reliable, and completely free. The banana theme adds a fun touch!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Social Media Manager',
    company: 'Digital Agency',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'As a social media manager, I need to edit dozens of images daily. This editor saves me hours every week. Highly recommended!',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Content Creator',
    company: 'YouTube',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'The privacy feature is amazing - knowing my images never leave my device gives me peace of mind. Great tool for content creators!',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Blogger',
    company: 'Travel Blog',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'I love how easy it is to use. No learning curve, just upload and edit. The modern design makes it a joy to work with.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-banana-50 to-white relative overflow-hidden">
      {/* Banana decorations */}
      <div className="absolute top-10 right-10 text-5xl opacity-10 rotate-12">🍌</div>
      <div className="absolute bottom-10 left-10 text-4xl opacity-10 -rotate-12">🍌</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-3xl">🍌</span>
            <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
          </div>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our community
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-banana-50 transition text-gray-700 hover:text-banana-600"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-banana-50 transition text-gray-700 hover:text-banana-600"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          <div className="text-center">
            {/* Rating Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FiStar
                  key={i}
                  className="w-6 h-6 text-banana-500 fill-banana-500"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-banana-200 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-banana-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

