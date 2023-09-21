import { getPostBySlug } from 'mdx/index'

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
        <section>
            <div className='container py-4 prose'>{content}</div>
        </section>
    </main>
  )
}

export default Page