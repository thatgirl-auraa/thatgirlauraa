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
  title: 'That Girl Aura',
  description: 'A lifestyle brand celebrating beauty, wellness, and mindful living',
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