import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";
const storageKey = "fauscrew-theme";
const darkQuery = "(prefers-color-scheme: dark)";

function savedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Depolama kapalıysa sistem tercihi geçerli olur.
  }
  return null;
}

function systemTheme(): Theme {
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

/**
 * Light or dark. Until the visitor picks one, the page follows the system; the inline
 * script in index.html applies the same rule before first paint.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => savedTheme() ?? systemTheme());

  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const follow = () => {
      if (savedTheme()) return;
      const next = systemTheme();
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  /** Switches theme, revealing the new one as a circle that grows from `origin`. */
  const toggle = (origin: { x: number; y: number }) => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Seçim yalnızca bu oturumda geçerli kalır.
    }
    const root = document.documentElement;
    const commit = () => {
      root.dataset.theme = next;
      flushSync(() => setTheme(next));
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      commit();
      return;
    }
    // Color transitions would blur the reveal edge, so they pause during the switch.
    root.classList.add("theme-switching");
    const transition = document.startViewTransition(commit);
    transition.ready.then(() => {
      const radius = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y),
      );
      root.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
    transition.finished.finally(() => root.classList.remove("theme-switching"));
  };

  return [theme, toggle] as const;
}
