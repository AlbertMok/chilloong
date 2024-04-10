import { PostCard } from "@/components/PostCard";
import { cn, formatDay } from "@/lib/utils";
export const FeatureSection = ({ className }: { className?: string }) => {
  // 暂时用所有文章作为代替
  const featuredPost = ["hello-world"];
  // featuredPost存放的是slug
  const featuredPosts = featuredPost.map((slug) => {
    const post = {
      slug,
      title: "Hello World",
      summary:
        "这是一篇测试文章，用于测试首页文章卡片的展示效果，这是一篇测试文章，用于测试首页文章卡片的展示效果，这是一篇测试文章，用于测试首页文章卡片的展示效果",
      date: "2021-08-01",
    };
    return post;
  });

  return (
    <section className={cn("dark:text-neutral-200", className)}>
      <h2 className="font-serif text-4xl font-bold text-primary-11">
        精选文章
      </h2>
      <div className="mt-6">
        <div className="flex flex-col space-y-8">
          {featuredPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              date={formatDay(post.date)}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
