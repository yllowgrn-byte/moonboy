import { useState, useEffect } from "react";
import SpaceDust from "@/components/SpaceDust";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import deluluPedestal from "@/assets/delulu-pedestal.png";
import { useConfig } from "@/hooks/useConfig";

const StorySectionWithBuy = () => {
  const { buyLink } = useConfig();
  const buttons = [
    { label: "Follow on X", href: "https://x.com/delusionalboyqt" },
    ...(buyLink ? [{ label: "Buy delulu", href: buyLink }] : []),
  ];
  return (
    <StorySection
      variant="wide"
      title="out in the wild"
      description="cars blurring past, sun blasting, and delulu just kickflips through it like the city owes him rent. no headphones, no fear, no plan — just the skateboard and whatever song is stuck in his head that week."
      buttons={buttons}
      image={deluluPedestal}
      imageAlt="delulu in the city"
    />
  );
};

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Header showContent={showContent} />
      <HeroSection showContent={showContent} />
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 5s ease-out 1.2s",
        }}
      >
        <CharacterSection />
        <StorySectionWithBuy />

        <StorySection
          variant="centered"
          title="just sittin'"
          text={[
            "some days he just slides down the wall,",
            "back flat against the red,",
            "",
            "phone face down for once,",
            "no posting, no scrolling, no replies.",
            "",
            "thinking about nothing.",
            "thinking about everything.",
            "honestly? probably nothing.",
          ]}
          videoSrc="/videos/ritual.mp4"
          imageAlt="delulu sitting against the wall"
        />

        <Footer />
      </div>
      <SpaceDust />
    </div>
  );
};

export default Index;
