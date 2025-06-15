import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Post { 
  slug: string; 
  frontMatter: { 
    title: string; 
    date: string; 
    image: string; 
    description: string; 
  }; 
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/journal');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      frontMatter: data as Post['frontMatter'],
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());

  return posts;
}

export default async function JournalPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

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
      {featuredPost && (
        <div className="max-w-7xl mx-auto mb-20">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96">
              <Image
                src={featuredPost.frontMatter.image}
                alt={featuredPost.frontMatter.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blush-pink text-dusty-mauve px-4 py-1 rounded-full text-sm">
                  Featured
                </span>
                <span className="text-gray-500">{featuredPost.frontMatter.date}</span>
              </div>
              <h2 className="font-playfair text-3xl text-dusty-mauve mb-4">
                {featuredPost.frontMatter.title}
              </h2>
              <p className="font-poppins text-gray-600 mb-6">
                {featuredPost.frontMatter.description}
              </p>
              <Link
                href={`/journal/${featuredPost.slug}`}
                className="inline-block bg-sage-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent Posts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={post.frontMatter.image}
                alt={post.frontMatter.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-gray-500 text-sm">{post.frontMatter.date}</span>
              </div>
              <h3 className="font-playfair text-xl text-dusty-mauve mb-3">
                {post.frontMatter.title}
              </h3>
              <p className="font-poppins text-gray-600 mb-4">
                {post.frontMatter.description}
              </p>
              <Link
                href={`/journal/${post.slug}`}
                className="text-sage-green hover:text-opacity-80 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
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