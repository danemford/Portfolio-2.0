'use client';

import { useState } from 'react';
import Link from "next/link";

function PostsFilter({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <div className="gap-4 inline-flex mt-4 mb-6">
        <span className="mr-4 font-medium">Filter By:</span>
        <button onClick={() => setSelectedCategory('All')} className={`mr-2 ${selectedCategory === 'All' ? 'underline' : ''}`}>All</button>
        <button onClick={() => setSelectedCategory('personal')} className={`mr-2 ${selectedCategory === 'personal' ? 'underline' : ''}`}>Personal</button>
        <button onClick={() => setSelectedCategory('technical')} className={`mr-2 ${selectedCategory === 'technical' ? 'underline' : ''}`}>Technical</button>
      </div>
      {filteredPosts.map(post => (
        <div key={post?.title}>
          <Link href={`posts/${post.slug}`}>
            <div className="flex justify-between">
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <h4 className={`text-sm font-bold border-2 border-inherit rounded-full py-2 px-3 ${post.category === 'personal' ? ' text-sky-500' : post.category === 'technical' ? 'text-green-500' : ''}`}>
                {post.category}
              </h4>
            </div>
            <p className='text-sm'>{post.description}</p>
            <time className='text-[12px] text-gray-400'>
              {post.publishDate}
            </time>
          </Link>
          <hr className="mb-6"/>
        </div>
      ))}
    </>
  );
}

export default PostsFilter;
