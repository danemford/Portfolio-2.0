
export default function ProjectCard(props) {
    const icon = props.icon
    const title= props.title
    const description = props.description
  return (
    <div className="flex min-h-[225px] flex-col items-start gap-4 rounded-lg p-6 shadow-lg transition-shadow duration-150 ease-in dark:shadow-zinc-600/75 hover:shadow-gray-400 dark:hover:shadow-zinc-500/75 mb-6">
        <div>icon</div>
        <h3 className=" font-semibold">title</h3>
        <p className=" text-sm font-light">description</p>
    </div>
  )
}
