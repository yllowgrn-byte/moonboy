import { useEffect, useRef } from "react";

interface ButtonDef {
  label: string;
  href: string;
}

interface Props {
  title?: string;
  text?: string[];
  description?: string;
  buttons?: ButtonDef[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  variant?: "split" | "centered" | "wide";
}

const StorySection = ({ title, text, description, buttons, image, imageAlt, reverse, variant = "split" }: Props) => {
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

  if (variant === "wide") {
    return (
      <section ref={ref} className="fade-section py-28 md:py-44 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            {title && (
              <h2
                className="font-display text-5xl md:text-6xl lg:text-8xl font-semibold text-foreground tracking-wide leading-[1.1]"
                style={{ fontVariant: "small-caps" }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="font-display text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground italic max-w-xl">
                {description}
              </p>
            )}
            {text && (
              <div className="space-y-4">
                {text.map((line, i) => (
                  <p
                    key={i}
                    className={`font-display text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide lowercase ${
                      line === "" ? "h-4" : "text-muted-foreground italic"
                    }`}
                  >
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>
            )}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4">
                {buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border border-foreground/30 hover:bg-foreground/10 text-foreground font-display text-base tracking-[0.15em] transition-all duration-300"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div className="flex justify-center md:justify-end">
              <img
                src={image}
                alt={imageAlt || "moonboy"}
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain animate-float drop-shadow-[0_0_60px_hsl(210,100%,75%,0.15)]"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section ref={ref} className="fade-section py-28 md:py-44 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center gap-12">
          {title && (
            <h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-wide"
              style={{ fontVariant: "small-caps" }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="font-display text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground italic max-w-3xl">
              {description}
            </p>
          )}
          {text && (
            <div className="max-w-3xl space-y-5">
              {text.map((line, i) => (
                <p
                  key={i}
                  className={`font-display text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide lowercase ${
                    line === "" ? "h-5" : "text-muted-foreground italic"
                  }`}
                >
                  {line || "\u00A0"}
                </p>
              ))}
            </div>
          )}
          {image && (
            <img
              src={image}
              alt={imageAlt || "moonboy"}
              className="w-72 md:w-96 lg:w-[28rem] object-contain animate-float drop-shadow-[0_0_40px_hsl(210,100%,75%,0.1)]"
            />
          )}
        </div>
      </section>
    );
  }

  // Default: split
  return (
    <section ref={ref} className="fade-section py-28 md:py-44 px-6 md:px-12 lg:px-20 w-full">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-20 w-full max-w-screen-2xl mx-auto`}
      >
        <div className="flex-1 space-y-5">
          {title && (
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-wide mb-8"
              style={{ fontVariant: "small-caps" }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="font-display text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground italic">
              {description}
            </p>
          )}
          {text &&
            text.map((line, i) => (
              <p
                key={i}
                className={`font-display text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide lowercase ${
                  line === "" ? "h-5" : "text-muted-foreground italic"
                }`}
              >
                {line || "\u00A0"}
              </p>
            ))}
        </div>
        {image && (
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={imageAlt || "moonboy"}
              className="w-64 md:w-80 lg:w-[28rem] object-contain animate-float drop-shadow-[0_0_40px_hsl(210,100%,75%,0.1)]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;
