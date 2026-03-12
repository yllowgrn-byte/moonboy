import { useState, useEffect, useCallback } from "react";

const CONFIG_KEY = "moonboy_config";

export interface MoonboyConfig {
  tokenAddress: string;
  buyLink: string;
}

const defaultConfig: MoonboyConfig = {
  tokenAddress: "",
  buyLink: "",
};

export function getConfig(): MoonboyConfig {
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    if (raw) return { ...defaultConfig, ...JSON.parse(raw) };
  } catch {}
  return defaultConfig;
}

export function saveConfig(config: MoonboyConfig) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  // Dispatch event for same-tab listeners
  window.dispatchEvent(new StorageEvent("storage", { key: CONFIG_KEY }));
}

export function useConfig() {
  const [config, setConfig] = useState<MoonboyConfig>(getConfig);

  const refresh = useCallback(() => setConfig(getConfig()), []);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === CONFIG_KEY || e.key === null) refresh();
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [refresh]);

  return config;
}
