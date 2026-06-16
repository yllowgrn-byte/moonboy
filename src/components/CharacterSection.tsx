import { useEffect, useRef } from "react";
import crazyFace from "@/assets/crazy-face.png";

const cards = [
  {
    title: "Born Unhinged",
    text: "No one invited him. No one expected him. He just appeared one day, hood up, mask on, smiling at a world that forgot how to.",
  },
  {
    title: "Pure Chaos",
    text: "crazy carries no agenda, no roadmap, no pressure. Just a calm, unbothered presence proving that normal is boring.",
  },
  {
    title: "Zero Rules",
    text: "Free from the weight of expectations, crazy drifts wherever curiosity takes him — unbothered, untethered, unstoppable.",
  },
  {
    title: "Community Soul",
    text: "The world of crazy grows through shared delusions, collective wonder, and the quiet magic of those who simply get it.",
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
          Where It All Begins
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
              src={crazyFace}
              alt="crazy standing in the dark"
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
