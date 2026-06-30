interface Props {
  showContent?: boolean;
}

const Header = ({ showContent = true }: Props) => (
  <header className="absolute top-0 left-0 right-0 z-40">
    <div
      className="w-full px-8 md:px-12 py-6 flex items-center justify-between transition-all duration-[5s] ease-out"
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? "translateY(0)" : "translateY(-40px)",
      }}
    >
      <span className="font-display text-2xl md:text-3xl font-semibold tracking-[0.2em] lowercase text-foreground"
            style={{ fontVariant: "small-caps" }}>
        delulu
      </span>
      <a
        href="https://x.com/delusionalboyqt"
        target="_blank"
        rel="noopener noreferrer"
        className="font-display text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest"
        style={{ fontVariant: "small-caps" }}
      >
        @delusionalboyqt
      </a>
    </div>
  </header>
);

export default Header;
