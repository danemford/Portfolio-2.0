import Link from "next/link"

export default function ProjectCard({link, icon, title, description}) {
  return (
    <section>
      <Link href={link}>
        <div className="flex min-h-[225px] flex-col items-start gap-4 rounded-lg p-6 shadow-lg transition-shadow duration-150 ease-in hover:shadow-gray-400 mb-6">
        {icon}
        <h3 className=" font-semibold">{title}</h3>
        <p className=" text-sm font-light">{description}</p>
        </div>
      </Link>
    </section>
  )
}
