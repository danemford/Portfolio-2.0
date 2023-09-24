'use client'
import Link from 'next/link';
import { useState } from 'react';

// This directive indicates that this is a client-side component
// use client;

function ProjectsFilter({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

    return (
        <>
          <div className="flex gap-4 my-4">
            <button onClick={() => setSelectedCategory('All')}>All</button>
            <button onClick={() => setSelectedCategory('Personal')}>Personal</button>
            <button onClick={() => setSelectedCategory('Technical')}>Technical</button>
          </div>
          {filteredProjects.map(project => (
            <div key={project?.title} className="hover:scale-[1.10] transition-transform">
              <Link href={`projects/${project.slug}`} className='p-8 w-full flex flex-col items-center'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='mt-4 text-sm'>{project.description}</p>
                <time className='text-[12px] text-gray-400'>
                  {project.publishDate}
                </time>
              </Link>
              <hr />
            </div>
          ))}
        </>
      );
}

export default ProjectsFilter;
