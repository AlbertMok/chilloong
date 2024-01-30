import { cn } from "@/lib/utils";
import Link from "next/link";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "flex items-center justify-between space-y-2 text-slate-600 "
      )}
    >
      <p>
        © 2023 AlbertM —— Built with{" "}
        <Link href="https://beta.nextjs.org/">Next.js</Link>,{" "}
        <Link href="https://mdxjs.com/">MDX</Link>,{" "}
        <Link href="https://tailwindcss.com/">Tailwind</Link> and{" "}
        <Link href="https://vercel.com/">Vercel</Link>
      </p>
    </footer>
  );
};
