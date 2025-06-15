import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

interface PickProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const picksDirectory = path.join(process.cwd(), 'src/content/picks');
  const filenames = fs.readdirSync(picksDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPick(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/picks', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  // Dynamically import the MDX file as a component
  const MDXContent = await import(`../../../content/picks/${slug}.mdx`).then(mod => mod.default);

  return {
    frontMatter: data,
    MDXContent,
  };
}

export default async function PickPage({ params }: PickProps) {
  const { slug } = params;
  const { frontMatter, MDXContent } = await getPick(slug);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
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