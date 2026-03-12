import { useState, useEffect, useRef } from "react";

interface Props {
  onComplete: () => void;
}

const IntroTeaser = ({ onComplete }: Props) => {
  const [phase, setPhase] = useState<"video" | "fading" | "done">("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // After 3.5s of video, start fading out
    const timer = setTimeout(() => setPhase("fading"), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "fading") {
      const timer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 1.2s ease-in-out",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "saturate(0) brightness(0.35)",
          transition: "filter 1.2s ease-in-out",
        }}
      >
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
};

export default IntroTeaser;
