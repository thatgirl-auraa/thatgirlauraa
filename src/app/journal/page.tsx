import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function JournalPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-5xl text-dusty-mauve mb-6">
          Glow Journal
        </h1>
        <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
          Insights, inspiration, and mindful living tips to help you cultivate your
          best life
        </p>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-96">
            <Image
              src="/images/featured-post.jpg"
              alt="Featured Post"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blush-pink text-dusty-mauve px-4 py-1 rounded-full text-sm">
                Featured
              </span>
              <span className="text-gray-500">May 15, 2024</span>
            </div>
            <h2 className="font-playfair text-3xl text-dusty-mauve mb-4">
              The Art of Mindful Living
            </h2>
            <p className="font-poppins text-gray-600 mb-6">
              Discover how to incorporate mindfulness into your daily routine and
              create a more balanced, intentional lifestyle...
            </p>
            <Link
              href="/journal/mindful-living"
              className="inline-block bg-sage-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Post Card */}
        <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <Image
              src="/images/post-1.jpg"
              alt="Wellness Tips"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gray-500 text-sm">May 10, 2024</span>
            </div>
            <h3 className="font-playfair text-xl text-dusty-mauve mb-3">
              Morning Routine Essentials
            </h3>
            <p className="font-poppins text-gray-600 mb-4">
              Start your day right with these simple yet effective morning habits...
            </p>
            <Link
              href="/journal/morning-routine"
              className="text-sage-green hover:text-opacity-80 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </article>

        {/* Add more post cards here */}
      </div>

      {/* Newsletter Section */}
      <section className="mt-20 bg-blush-pink py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-dusty-mauve mb-6">
            Join Our Community
          </h2>
          <p className="font-poppins text-lg text-gray-700 mb-8">
            Subscribe to receive the latest articles and lifestyle tips
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