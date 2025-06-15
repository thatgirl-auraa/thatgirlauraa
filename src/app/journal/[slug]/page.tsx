import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

interface PageProps {
  params: { [key: string]: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/journal');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/journal', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  // Dynamically import the MDX file as a component
  const MDXContent = await import(`../../../content/journal/${slug}.mdx`).then(mod => mod.default);

  return {
    frontMatter: data,
    MDXContent,
  };
}

export default async function PostPage({ params }: PageProps) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  if (!slug) {
    return <div>Error: Slug not found</div>;
  }
  const { frontMatter, MDXContent } = await getPost(slug);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-500 mb-4">{frontMatter.date}</p>
      {frontMatter.image && (
        <div className="relative w-full h-64 mb-6">
          <Image src={frontMatter.image} alt={frontMatter.title} fill className="object-cover rounded-lg" />
        </div>
      )}
      <div className="prose">
        <MDXContent />
      </div>
    </div>
  );
}