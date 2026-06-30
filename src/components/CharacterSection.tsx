import { useEffect, useRef } from "react";
import deluluFace from "@/assets/delulu-face.png";

const cards = [
  {
    title: "Born Delusional",
    text: "nobody saw him coming. one tuesday he just logged on, durag tied tight, mind already gone, and somehow we all started agreeing with him.",
  },
  {
    title: "Pure Cope",
    text: "no roadmap. no business plan. no thesis. just vibes, a cracked phone screen, and the unshakeable belief that it's all gonna work out somehow.",
  },
  {
    title: "Zero Plans",
    text: "delulu doesn't wake up early. he doesn't journal. he just opens the app, posts something unhinged, and lets the universe handle the rest.",
  },
  {
    title: "Delulu Gang",
    text: "every delusion is shared. every cope is communal. if you're here, you already get it — no explanation needed, no permission asked.",
  },
];

const CharacterSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="fade-section py-28 md:py-44 px-6 md:px-12 lg:px-20 w-full"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h2
          className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-wide text-center mb-16 md:mb-24"
          style={{ fontVariant: "small-caps" }}
        >
          meet delulu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left cards */}
          <div className="flex flex-col gap-8 md:gap-12">
            {cards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className="border border-foreground/15 p-8 md:p-10 space-y-4"
              >
                <h3
                  className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-wide"
                  style={{ fontVariant: "small-caps" }}
                >
                  {card.title}
                </h3>
                <p className="font-display text-base md:text-lg font-light leading-relaxed text-muted-foreground italic">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center order-first md:order-none">
            <img
              src={deluluFace}
              alt="delulu on his phone"
              className="w-72 md:w-80 lg:w-[26rem] object-contain animate-float drop-shadow-[0_0_80px_hsl(210,100%,75%,0.2)]"
            />
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-8 md:gap-12">
            {cards.slice(2, 4).map((card, i) => (
              <div
                key={i}
                className="border border-foreground/15 p-8 md:p-10 space-y-4"
              >
                <h3
                  className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-wide"
                  style={{ fontVariant: "small-caps" }}
                >
                  {card.title}
                </h3>
                <p className="font-display text-base md:text-lg font-light leading-relaxed text-muted-foreground italic">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
