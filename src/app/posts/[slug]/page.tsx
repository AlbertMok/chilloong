import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import rehypeKatex from "rehype-katex";
const markdown = `# Hi, *Pluto*! 
## This is a markdown file
- I am a markdown file
- I am a markdown file

\`\`\`math
E = mc^2

\`\`\`

The lift coefficient ($C_L$) is a dimensionless coefficient.

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
    <section className="flex items-center justify-center">
      <div className="prose  min-w-[70%] p-10 rounded-xl shadow-xl">
        <p>this is posts page,under construct {slug}</p>
        <Markdown
          remarkPlugins={[remarkGfm, remarkRehype, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdown}
        </Markdown>
      </div>
    </section>
  );
}
