
export default function ProjectCard({icon, title, description}) {
  return (
    <div className="flex min-h-[225px] flex-col items-start gap-4 rounded-lg p-6 shadow-lg transition-shadow duration-150 ease-in hover:shadow-gray-400 mb-6">
        <div>{icon}</div>
        <h3 className=" font-semibold">{title}</h3>
        <p className=" text-sm font-light">{description}</p>
    </div>
  )
}
