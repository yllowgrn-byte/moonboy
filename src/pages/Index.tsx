import { useState, useEffect } from "react";
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

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Header style={{ opacity: showContent ? 1 : 0, transition: "opacity 1.5s ease-in-out" }} />
      <HeroSection showContent={showContent} />
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1.5s ease-in-out 0.3s",
        }}
      >
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
      </div>
      <SpaceDust />
    </div>
  );
};

export default Index;
