import PostCard from "@/components/Card";

export default function PostSection() {
  return (
    <section className="flex flex-col max-md:items-center">
      <h1 className="text-2xl font-serif font-semibold">Posts</h1>
      <PostCard title="Hello" />
    </section>
  );
}
