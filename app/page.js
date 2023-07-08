import Image from "next/image" 
import Dane from "/public/Dane.svg"
import { LiaHandPointDown } from 'react-icons/lia'
import ProjectCard from "@/components/Navbar/ProjectCard"
import ContactForm from "@/components/Navbar/ContactForm"

export default function Page() {
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
      <section className="mb-24" id="posts">
        <h2 className="mb-8 text-2xl font-bold">
          Recent Posts
        </h2>
        <ul>
          <li className="mb-6">
            <h3 className=" font-semibold">
            Post One.
            </h3>
            <p className=" text-sm font-light">
              Description of post one.
            </p>
          </li>
          <li className="mb-6">
            <h3 className=" font-semibold">
            Post Two.
            </h3>
            <p className=" text-sm font-light">
              Description of post two.
            </p>
          </li>
          <li className="mb-6">
            <h3 className=" font-semibold">
            Post Three.
            </h3>
            <p className=" text-sm font-light">
              Description of post three.
            </p>
          </li>
        </ul>
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
