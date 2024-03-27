import { IntroSection } from "./IntroSection";
import PostSection from "./PostSection";

export function generateMetadata() {
  return {
    title: "主页",
  };
}

export default function Home() {
  return (
    <div className="flex-col">
      <IntroSection />
      <PostSection />
    </div>
  );
}
