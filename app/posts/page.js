import Link from "next/link"
import { getAllPostsMeta } from "../../mdx/index"

const Page = async () => {
  const posts = await getAllPostsMeta()

    return (
      <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
        <section className='py-24'>
          <div className='container'>
            <h1 className='text-3xl font-bold'>All Posts</h1>
            <div className='flex-col gap-6 mt-6'>
              {posts?.map(post => (
                <>
                  <Link
                  href={`posts/${post.slug}`}
                  key={post?.title}
                  className=''
                >
                  <div className="flex justify-between">
                    <h3 className='text-xl font-semibold'>{post.title}</h3>
                    <h4 className={`text-sm font-bold rounded-lg py-1 px-2 ${post.category === 'personal' ? 'bg-blue-500 text-white' : post.category === 'technical' ? 'bg-green-500 text-white' : ''}`}>
                    {post.category}
                  </h4>
                  </div>
                  <p className='text-sm'>{post.description}</p>
                  <time className='text-[12px] text-gray-400'>
                    {post.publishDate}
                  </time>
                </Link>
                <hr className="mb-6"/>
                </>
              ))}
            </div>
          </div>
        </section>
      </main>    
    )
  }

  export default Page