import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

interface PostProps {
  source: any;
  frontMatter: {
    title: string;
    date: string;
    image: string;
  };
}

export default function Post({ source, frontMatter }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-500 mb-4">{frontMatter.date}</p>
      <img src={frontMatter.image} alt={frontMatter.title} className="mb-6 rounded-lg" />
      <div className="prose">
        <MDXRemote {...source} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/content/picks');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const filePath = path.join(process.cwd(), 'src/content/picks', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}; 