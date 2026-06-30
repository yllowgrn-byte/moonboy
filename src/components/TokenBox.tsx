import { useState } from "react";
import { useConfig } from "@/hooks/useConfig";
import { Copy, Check, ExternalLink } from "lucide-react";

const TokenBox = () => {
  const { tokenAddress, buyLink } = useConfig();
  const [copied, setCopied] = useState(false);

  if (!tokenAddress && !buyLink) return null;

  const handleCopy = async () => {
    if (!tokenAddress) return;
    await navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-4 w-full max-w-2xl mx-auto">
      {buyLink && (
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-3 border border-foreground/30 hover:bg-foreground/10 text-foreground transition-all duration-300 text-sm font-medium tracking-widest uppercase"
        >
          Buy delulu <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
      {tokenAddress && (
        <div className="flex items-center border border-foreground/30">
          <div className="flex-1 px-4 py-3 text-xs font-mono text-muted-foreground truncate">
            {tokenAddress}
          </div>
          <button
            onClick={handleCopy}
            className="shrink-0 px-4 py-3 border-l border-foreground/30 hover:bg-foreground/10 text-foreground transition-colors duration-200 text-xs font-medium tracking-wider uppercase"
          >
            {copied ? <Check className="w-4 h-4 text-primary" /> : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TokenBox;
