import Markdown from "react-markdown";

const markdown = `# Hi, *Pluto*! 
## This is a markdown file
- I am a markdown file
- I am a markdown file


`;
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="prose border-[1.5px] min-w-full p-10 rounded-xl">
      <p>this is posts page,under construct {params.slug}</p>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
