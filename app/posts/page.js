import { getAllPostsMeta } from "../../mdx/index";
import PostsFilter from './PostsFilter'; // Import the client-side component

const parseDate = (dateStr) => {
  const cleanedDateStr = dateStr.replace(/(\d)(st|nd|rd|th)/, '$1');
  return new Date(cleanedDateStr);
};

const Page = async () => {
  const posts = await getAllPostsMeta();
  const sortedPosts = posts.sort((a, b) => parseDate(b.publishDate) - parseDate(a.publishDate));

  return (
    <main className="mx-auto mt-52 mb-24 max-w-3xl px-6 w-full grow">
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>All Posts</h1>
          <div className='flex-col gap-6 mt-6'>
            <PostsFilter posts={sortedPosts} />
          </div>
        </div>
      </section>
    </main>    
  );
}

export default Page;