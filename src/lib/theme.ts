import { useEffect, useState } from "react";

export type ThemeChoice = "system" | "light" | "dark";
const storageKey = "fauscrew-theme";
const darkQuery = "(prefers-color-scheme: dark)";

function readChoice(): ThemeChoice {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Depolama kapalıysa sistem tercihi geçerli olur.
  }
  return "system";
}

function apply(choice: ThemeChoice) {
  const dark =
    choice === "dark" ||
    (choice === "system" && window.matchMedia(darkQuery).matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

export function useTheme() {
  const [choice, setChoice] = useState<ThemeChoice>(readChoice);

  useEffect(() => {
    apply(choice);
    try {
      if (choice === "system") localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, choice);
    } catch {
      // Seçim yalnızca bu oturumda geçerli kalır.
    }
    if (choice !== "system") return;
    const media = window.matchMedia(darkQuery);
    const follow = () => apply("system");
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, [choice]);

  return [choice, setChoice] as const;
}
