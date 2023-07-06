import Image from "next/image" 
import Dane from "/public/Dane.svg"

export default function Page() {
  return (
    <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
      <section className="mb-24 flex flex-col-reverse gap-y-4 gap-x-10 md:flex-row items-start md:items-center">
        <div className="">
          <h1>
            Hey there, I'm Dane.
          </h1>
          <h2>
            Thanks for dropping by.  Here you'll find some of the things I've leant along my web development journey.
          </h2>
        </div>
        <div className="">
          <Image src={Dane} alt="A picture of Dane" className="w-3/5 h-3/5 md:w-full md:h-full"/>
        </div>
      </section>
    </main>
  )
}
