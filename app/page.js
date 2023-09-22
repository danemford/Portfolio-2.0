import Image from "next/image" 
import Dane from "/public/Dane.svg"
import { LiaHandPointDown } from 'react-icons/lia'
import ProjectCard from "../components/ProjectCard/ProjectCard"
import ContactForm from "../components/ContactForm/ContactForm"
import Link from "next/link"
import { getAllPostsMeta, getAllProjectsMeta } from "../mdx/index"
import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoReact } from 'react-icons/bi'
import { SiMdx } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { BiLogoFirebase } from 'react-icons/bi'
import { SiTypescript } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'


const Page = async () => {

  const posts = await getAllPostsMeta();

  const projects = await getAllProjectsMeta();

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
              <div className="mb-6 transition-transform hover:scale-[1.01] " key={post?.title}>
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
          <ProjectCard icon={<div className="flex"><BiLogoReact className="h-6 w-6 mr-1 "/><SiStyledcomponents className="h-6 w-6 mr-1 "/><BiLogoFirebase className="h-6 w-6 mr-1 "/></div>} title="Ecommerce Clothing Store" description="An eccomerce store built with React and Styled Components on the front end, and Firebase on the back end for storing clothing data and user authentication." />
          <ProjectCard icon={<div className="flex"><TbBrandNextjs className="h-6 w-6 mr-1 "/><BiLogoReact className="h-6 w-6 mr-1"/><BiLogoTailwindCss className="h-6 w-6 mr-1"/><SiMdx className="h-6 w-6 mr-1"/></div>} title="Portfolio Site" description="This portfolio site built with NextJS, React, Tailwind, and MDX for content management." />
          <ProjectCard icon={<div className="flex"><SiTypescript className="h-6 w-6 mr-1 "/><BiLogoReact className="h-6 w-6 mr-1"/><SiCss3 className="h-6 w-6 mr-1 "/></div>} title="Monsters Rolodex" description="A rolodex of monsters, built with Typescript, React and CSS3." />
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