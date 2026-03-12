import SpaceDust from "@/components/SpaceDust";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import moonboyPedestal from "@/assets/moonboy-pedestal.png";
import moonboyHeadphones from "@/assets/moonboy-headphones.png";

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
