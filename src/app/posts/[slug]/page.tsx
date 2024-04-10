import Markdown from "react-markdown";

const markdown = `# Hi, *Pluto*! 
## This is a markdown file
- I am a markdown file
- I am a markdown file


`;
export function generateStaticParams() {
  const posts = [
    { title: "post1", slug: "post1" },
    { title: "post2", slug: "post2" },
    { title: "post3", slug: "post3" },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * generate the page's meta info
 * @param param0
 * @returns
 */
export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: "Posts",
  };
}
export default function Page() {
  const slug = generateStaticParams()[0].slug;
  return (
    <div className="prose border-[1.5px] min-w-full p-10 rounded-xl">
      <p>this is posts page,under construct {slug}</p>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
