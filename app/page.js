import Image from "next/image" 
import Dane from "/public/Dane.svg"
import { LiaHandPointDown } from 'react-icons/lia'
import ProjectCard from "../components/ProjectCard/ProjectCard"
import ContactForm from "../components/ContactForm/ContactForm"
import Link from "next/link"
import { getAllPostsMeta } from "../mdx/index"

const Page = async () => {

  const posts = await getAllPostsMeta()

  function parseDateString(dateString) {
    // Remove the 'th', 'st', 'nd', 'rd' from the date string
    const cleanedDate = dateString.replace(/(st|nd|rd|th),/, ',');
  
    // Parse the cleaned date string into a Date object
    return new Date(cleanedDate);
  }
  

  return (
    <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
      <section className="mb-24 flex flex-col-reverse gap-y-4 gap-x-10 md:flex-row items-start md:items-center">
        <div className="">
          <h1 className="text-3xl font-bold">
            Hey there, I'm Dane.
          </h1>
          <h2 className="pt-6">
            I'm glad you're here.  Join me on my web development journey and uncover the invaluable insights that I've learned along the way. <LiaHandPointDown className="text-2xl mt-2" />
          </h2>
        </div>
        <div className="">
          <Image src={Dane} alt="A picture of Dane" className="w-3/5 h-3/5 md:w-full md:h-full"/>
        </div>
      </section>
      <section className="mb-24 container" id="posts">
        <h2 className="mb-8 text-2xl font-bold">
          Recent Posts
        </h2>
        <div>
          {posts?.sort((a, b) => parseDateString(b.publishDate) - parseDateString(a.publishDate))
            .slice(0, 4)
            .map(post => (
              <div className="mb-6" key={post?.title}>
                <Link href={`posts/${post.slug}`}>
                    <h3 className='font-semibold'>{post.title}</h3>
                    <p className='text-sm font-light'>{post.description}</p>
                    <time className='text-[12px] text-gray-400'>
                      {post.publishDate}
                    </time>
                </Link>
              </div>
          ))}
        </div>
        <div>
          <Link href={`posts/`}>
          <h3 className="mb-8 font-semibold">See All Posts</h3>
          </Link>
        </div>
      </section>
      <section className="mb-24">
        <h2 className="mb-8 text-2xl font-bold">
          Recent Projects
        </h2>
        <ul>
          <ProjectCard icon="Project Icon" title="Project Title" description="Project Description" />
          <ProjectCard icon="Project Icon" title="Project Title" description="Project Description" />
          <ProjectCard icon="Project Icon" title="Project Title" description="Project Description" />
        </ul>
      </section>
      <section>
      <h2 className="mb-8 text-2xl font-bold" id="contact">
          Contact
        </h2>
       <ContactForm />
      </section>
    </main>
  )
}

export default Page