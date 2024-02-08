import { IntroSection } from "./IntroSection";

export function generateMetadata() {
  return {
    title: "主页",
  };
}

export default function Home() {
  return (
    <div className="flex-col">
      <IntroSection />
    </div>
  );
}
