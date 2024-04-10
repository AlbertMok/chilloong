import { cn } from "@/lib/utils";

export const IntroSection = ({ className }: { className?: string }) => (
  <section className={cn("pt-[72px] dark:text-neutral-200", className)}>
    <h1 className="mb-6 font-serif text-5xl font-bold  ">
      你好, 我是 Albert 👋
    </h1>
    <section className="font-serif leading-7 font-medium text-lg">
      <p>欢迎来到我的个人网站。</p>
      <p>我使用 Next.js, Typescript, TailwindCSS 开发网页应用。</p>
      <p>我对 web 开发和设计有着浓厚的兴趣，喜欢探索和使用新的工具。</p>
    </section>
  </section>
);
