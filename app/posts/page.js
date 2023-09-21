import Link from "next/link"
import { getAllPostsMeta } from "../../mdx/index"

const Page = async () => {
  const posts = await getAllPostsMeta()

    return (
      <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
        <section className='py-24'>
          <div className='container'>
            <h1 className='text-3xl font-bold'>All Posts</h1>
            <div className='flex gap-6 mt-6'>
              {posts?.map(post => (
                <Link
                  href={`posts/${post.slug}`}
                  key={post?.title}
                  className='p-8 rounded-md shadow-md'
                >
                  <h3 className='text-xl font-semibold'>{post.title}</h3>
                  <p className='mt-4 text-sm'>{post.author}</p>
                  <time className='text-[12px] text-gray-400'>
                    {post.publishDate}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>    
    )
  }

  export default Page