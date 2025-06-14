import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PicksPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-5xl text-dusty-mauve mb-6">
          That Girl Picks
        </h1>
        <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
          Curated collections of products that elevate your daily life and help you
          maintain that perfect lifestyle aesthetic
        </p>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Collection Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-64">
            <Image
              src="/images/collection-1.jpg"
              alt="Wellness Collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="font-playfair text-2xl text-dusty-mauve mb-3">
              Wellness Collection
            </h2>
            <p className="font-poppins text-gray-600 mb-4">
              Essential products for your daily wellness routine
            </p>
            <Link
              href="/picks/wellness-collection"
              className="inline-block bg-sage-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* Add more collection cards here */}
      </div>

      {/* Newsletter Section */}
      <section className="mt-20 bg-blush-pink py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-dusty-mauve mb-6">
            Stay Updated
          </h2>
          <p className="font-poppins text-lg text-gray-700 mb-8">
            Subscribe to receive updates on new collections and exclusive offers
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