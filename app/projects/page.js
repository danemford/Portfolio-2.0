import Link from "next/link";
import { getAllProjectsMeta } from "../../mdx/index";

const Page = async () => {
  const projects = await getAllProjectsMeta();

  const parseDate = (dateStr) => {
    const cleanedDateStr = dateStr.replace(/(\d)(st|nd|rd|th)/, '$1');
    return new Date(cleanedDateStr);
  };
  
  return (
    <main className="flex items-center justify-center mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
      <section className='py-24 text-center w-full'>
        <h1 className='text-3xl font-bold'>All Projects</h1>
        <div className='flex flex-col items-center gap-6 mt-6 w-full'>
          {projects?.sort((a, b) => parseDate(b.publishDate) - parseDate(a.publishDate)).map(project => (
            <div key={project?.title} className="w-full">
            <div  className="hover:scale-110 transition-transform">
              <Link
              href={`projects/${project.slug}`}
              className='p-8 w-full flex flex-col items-center'
            >
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <p className='mt-4 text-sm'>{project.description}</p>
            </Link>
            </div>
            <hr />
            </div>
          ))}
        </div>
      </section>
    </main>    
  )
}

export default Page;