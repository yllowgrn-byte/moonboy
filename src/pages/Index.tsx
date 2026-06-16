import { useState, useEffect } from "react";
import SpaceDust from "@/components/SpaceDust";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import crazyPedestal from "@/assets/crazy-pedestal.png";
import { useConfig } from "@/hooks/useConfig";

const StorySectionWithBuy = () => {
  const { buyLink } = useConfig();
  const buttons = [
    { label: "Follow on X", href: "https://x.com/crazyman_sol" },
    ...(buyLink ? [{ label: "Buy crazy", href: buyLink }] : []),
  ];
  return (
    <StorySection
      variant="wide"
      title="Into the Void"
      description="In the silent depths of an endless night, a small hooded figure with a painted smile moves forward through the noise. The world feels loud, yet something quiet watches from the darkness. crazy captures a mysterious atmosphere where chaos and courage guide every step deeper into the unknown."
      buttons={buttons}
      image={crazyPedestal}
      imageAlt="crazy standing in the dark"
    />
  );
};

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Header showContent={showContent} />
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
            "maybe it's the sound of static.",
            "maybe it's lo-fi beats. who knows.",
          ]}
          videoSrc="/videos/ritual.mp4"
          imageAlt="crazy with headphones"
        />

        <Footer />
      </div>
      <SpaceDust />
    </div>
  );
};

export default Index;
