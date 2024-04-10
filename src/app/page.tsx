import { FeatureSection } from "./FeatureSection";
import { IntroSection } from "./IntroSection";

export function generateMetadata() {
  return {
    title: "主页",
  };
}

export default function Home() {
  return (
    <div className="flex-col p-10">
      <IntroSection />
      <FeatureSection className="mt-12" />
    </div>
  );
}
