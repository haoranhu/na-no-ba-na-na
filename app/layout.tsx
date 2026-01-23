import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import Footer from '@/components/Footer'

// Dynamically import Navbar with SSR disabled to avoid Supabase initialization during build
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Editor - Professional Photo Editing Online | Powered by Gemini 2.5 Flash Image',
  description: 'Edit your images online with our powerful and easy-to-use image editor powered by Gemini 2.5 Flash Image. Upload, edit, and enhance your photos instantly. Independent service, not affiliated with Google.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

