import React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const libre = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: 'That Girl Aura - Lifestyle, Beauty & Wellness',
  description: 'Discover curated lifestyle picks, beauty tips, and wellness guidance for the modern woman. Join our community of mindful living enthusiasts.',
  keywords: 'lifestyle, beauty, wellness, that girl, mindful living, self care, lifestyle picks',
  authors: [{ name: 'That Girl Aura' }],
  openGraph: {
    title: 'That Girl Aura - Lifestyle, Beauty & Wellness',
    description: 'Discover curated lifestyle picks, beauty tips, and wellness guidance for the modern woman.',
    url: 'https://thatgirlauraa.com',
    siteName: 'That Girl Aura',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'That Girl Aura - Lifestyle, Beauty & Wellness',
    description: 'Discover curated lifestyle picks, beauty tips, and wellness guidance for the modern woman.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} ${libre.variable} font-poppins bg-ivory`}>
        {children}
      </body>
    </html>
  )
}