import TokenBox from "./TokenBox";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-end px-6 pb-16">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "saturate(0) brightness(0.25)" }}
    >
      <source src="/videos/space.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-background/40 z-[1]" />

    <div className="relative z-20 flex flex-col items-center gap-2 max-w-3xl mx-auto text-center">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide text-foreground text-glow leading-tight"
          style={{ fontVariant: "small-caps" }}>
        just a guy from the moon.
      </h1>
      <p className="font-display text-base md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl italic text-muted-foreground leading-relaxed">
        no one really knows where moonboy came from. one day he just appeared, standing on a little pedestal somewhere on the moon.
      </p>

      <TokenBox />
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
  </section>
);

export default HeroSection;
