import { FeatureSection } from "./FeatureSection";
import { IntroSection } from "./IntroSection";
import SkillSection from "./SkillSection";

export function generateMetadata() {
  return {
    title: "主页",
  };
}

export default function Home() {
  return (
    <section className="flex p-10 justify-around">
      <section className="flex-col p-10">
        <IntroSection />
        <FeatureSection className="mt-12" />
      </section>
      <section className="flex-col p-10 flex-1">
        <SkillSection />
      </section>
    </section>
  );
}
