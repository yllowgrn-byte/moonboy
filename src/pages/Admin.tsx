import { useState } from "react";
import { getConfig, saveConfig } from "@/hooks/useConfig";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const ADMIN_PASSWORD = "onlyadmincanaccess";

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [tokenAddress, setTokenAddress] = useState("");
  const [buyLink, setBuyLink] = useState("");
  const [saved, setSaved] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      const cfg = getConfig();
      setTokenAddress(cfg.tokenAddress);
      setBuyLink(cfg.buyLink);
    } else {
      setError(true);
    }
  };

  const handleSave = () => {
    saveConfig({ tokenAddress, buyLink });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="text-foreground text-xl font-light tracking-widest lowercase text-center">
            admin
          </h1>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          {error && (
            <p className="text-destructive text-sm text-center">wrong password</p>
          )}
          <Button onClick={handleLogin} className="w-full">
            enter
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-foreground text-xl font-light tracking-widest lowercase text-center">
          delulu admin
        </h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground lowercase">token address</label>
            <div className="flex gap-2">
              <Input
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder="enter token address"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTokenAddress("")}
                aria-label="Clear token address"
              >
                <Trash2 className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground lowercase">buy link</label>
            <div className="flex gap-2">
              <Input
                value={buyLink}
                onChange={(e) => setBuyLink(e.target.value)}
                placeholder="enter buy link"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setBuyLink("")}
                aria-label="Clear buy link"
              >
                <Trash2 className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          {saved ? "saved ✓" : "save changes"}
        </Button>
      </div>
    </div>
  );
};

export default Admin;
