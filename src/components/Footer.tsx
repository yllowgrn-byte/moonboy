import spaceVideo from "@/assets/space-video.asset.json";

const Footer = () => (
  <footer className="relative w-full h-[60vh] flex items-end justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "saturate(0.3) brightness(0.35)" }}
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-40 z-10" />
    <div className="relative z-20 pb-12 text-center">
      <p className="font-display text-lg md:text-xl tracking-[0.3em] text-muted-foreground"
         style={{ fontVariant: "small-caps" }}>
        © 2026 <span className="text-foreground font-semibold">delulu</span>. all rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
