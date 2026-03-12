import SpaceDust from "@/components/SpaceDust";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import moonboyPedestal from "@/assets/moonboy-pedestal.png";
import moonboyHeadphones from "@/assets/moonboy-headphones.png";
import { useConfig } from "@/hooks/useConfig";

const StorySectionWithBuy = () => {
  const { buyLink } = useConfig();
  const buttons = [
    { label: "Follow on X", href: "https://x.com/moonboyqt" },
    ...(buyLink ? [{ label: "Buy moonboy", href: buyLink }] : []),
  ];
  return (
    <StorySection
      variant="wide"
      title="Into the Void"
      description="In the silent depths of an endless cosmos, a small figure with glowing eyes moves forward through the stardust. The universe feels quiet, yet something enormous watches from the darkness. Moonboy captures a mysterious atmosphere where curiosity and courage guide every step deeper into the unknown."
      buttons={buttons}
      image={moonboyPedestal}
      imageAlt="moonboy on his pedestal"
    />
  );
};

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <Header />
    <HeroSection />
    <CharacterSection />
    <StorySectionWithBuy />

    <StorySection
      variant="centered"
      title="The Ritual"
      text={[
        "sometimes he just sits there,",
        "puts the headphones on,",
        "",
        "plays the same song —",
        "again, and again, and again.",
        "",
        "no one knows what song it is.",
        "maybe it's the sound of stars collapsing.",
        "maybe it's lo-fi beats. who knows.",
      ]}
      image={moonboyHeadphones}
      imageAlt="moonboy with headphones"
    />

    <Footer />
    <SpaceDust />
  </div>
);

export default Index;
