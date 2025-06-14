import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Lifestyle background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">
            That Girl Aura
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white mb-8">
            Elevate Your Lifestyle
          </p>
          <Link
            href="/picks"
            className="bg-blush-pink text-dusty-mauve px-8 py-3 rounded-full font-poppins hover:bg-opacity-90 transition-all"
          >
            Explore Picks
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h2 className="font-playfair text-4xl text-dusty-mauve mb-6">
              That Girl Picks
            </h2>
            <p className="font-poppins text-lg text-gray-700 mb-8">
              Curated collections of products that elevate your daily life
            </p>
            <Link
              href="/picks"
              className="inline-block bg-sage-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              View Collections
            </Link>
          </div>
          <div className="text-center">
            <h2 className="font-playfair text-4xl text-dusty-mauve mb-6">
              Glow Journal
            </h2>
            <p className="font-poppins text-lg text-gray-700 mb-8">
              Insights and inspiration for mindful living
            </p>
            <Link
              href="/journal"
              className="inline-block bg-sage-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blush-pink py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-4xl text-dusty-mauve mb-6">
            Join Our Community
          </h2>
          <p className="font-poppins text-lg text-gray-700 mb-8">
            Subscribe to receive updates on new collections and lifestyle tips
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-sage-green text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
} 