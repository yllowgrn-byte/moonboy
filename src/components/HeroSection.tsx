import TokenBox from "./TokenBox";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "saturate(0.4) brightness(0.5)" }}
    >
      <source src="/videos/space.mp4" type="video/mp4" />
    </video>

    <div className="relative z-20 flex flex-col items-center gap-10 max-w-5xl mx-auto text-center">
      <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wide text-foreground text-glow leading-tight"
          style={{ fontVariant: "small-caps" }}>
        just a guy from the moon.
      </h1>
      <p className="font-display text-lg md:text-2xl lg:text-3xl font-light tracking-wide max-w-3xl italic text-muted-foreground leading-relaxed">
        no one really knows where moonboy came from. one day he just appeared, standing on a little pedestal somewhere on the moon.
      </p>

      <TokenBox />
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
  </section>
);

export default HeroSection;
