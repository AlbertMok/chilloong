import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calendar, Eye } from "lucide-react";

interface PostCard {
  title: string; // post's title
  summary: string; // post's summary
  date: string; // post date
  slug: string; // post slug
  className?: string; // postcard class name
}
/**
 * 文章卡片
 * @param param0
 * @returns
 */
export function PostCard({ title, summary, date, slug, className }: PostCard) {
  return (
    <Link
      className={cn(
        "group w-full max-w-none rounded-2xl border border-neutral-7 bg-neutral-2 p-6 shadow transition-shadow duration-300 ease-in-out hover:shadow-lg sm:max-w-lg",
        className
      )}
      href={`/posts/${slug}`}
    >
      <div className="text-xl font-medium text-neutral-12 group-hover:text-accent-11">
        {title}
      </div>
      <div className="mt-1 flex space-x-4 text-neutral-11">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <div>{date}</div>
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="h-4 w-4" />
          <div>
            {/* 浏览次数 */}
            {/* <ViewsNumberContainer slug={slug} /> 次浏览 */}
          </div>
        </div>
      </div>
      <div className="mt-3 text-lg text-neutral-11">{summary}</div>
    </Link>
  );
}
