import TokenBox from "./TokenBox";

interface Props {
  showContent?: boolean;
}

const HeroSection = ({ showContent = true }: Props) => (
  <section className="relative min-h-screen flex flex-col items-center justify-end px-6 pb-16">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-in-out"
      style={{
        filter: showContent ? "saturate(0) brightness(0.25)" : "saturate(0.2) brightness(0.45)",
      }}
    >
      <source src="/videos/space.mp4" type="video/mp4" />
    </video>

    <div
      className="absolute inset-0 bg-background/40 z-[1] transition-opacity duration-[2s] ease-in-out"
      style={{ opacity: showContent ? 1 : 0 }}
    />

    <div
      className="relative z-20 flex flex-col items-center gap-2 max-w-3xl mx-auto text-center transition-all duration-[1.5s] ease-in-out"
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-foreground text-glow whitespace-nowrap"
          style={{ fontVariant: "small-caps" }}>
        fuck it. be crazy.
      </h1>
      <p className="font-display text-base md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl italic text-muted-foreground leading-relaxed">
        no one really knows where crazy came from. one day he just appeared, hood up, mask on, reading the daily delusions like normal was never an option.
      </p>

      <TokenBox />
    </div>

    <div
      className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 transition-opacity duration-[2s] ease-in-out"
      style={{ opacity: showContent ? 1 : 0 }}
    />
  </section>
);

export default HeroSection;
