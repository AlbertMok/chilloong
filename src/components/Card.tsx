type PostCardProps = {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
};

export default function PostCard({
  title,
  description,
  image,
  link,
}: PostCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-neutral-300 border-[1.5px] max-md:w-3/4 w-[40%]">
      <img src={image} alt={title} className="w-32 h-32" />
      <div>
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-center">{description}</p>
      </div>
    </div>
  );
}
