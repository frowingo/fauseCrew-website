import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { content, type Content } from "../content";

export type Lang = keyof typeof content;
const storageKey = "fauscrew-lang";

function savedLang(): Lang | null {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "tr" || saved === "en") return saved;
  } catch {
    // Depolama kapalıysa sayfa Türkçe açılır.
  }
  return null;
}

const LangContext = createContext<{
  lang: Lang;
  t: Content;
  setLang: (next: Lang) => void;
} | null>(null);

/**
 * Turkish or English. The page opens in Turkish until the visitor picks a language; the
 * inline script in index.html sets `lang` from the same choice before first paint.
 */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => savedLang() ?? "tr");
  const timer = useRef<number | undefined>(undefined);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [lang, t]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Seçim yalnızca bu oturumda geçerli kalır.
    }
    // Restarts the text fade even when the visitor switches again mid-animation.
    const root = document.documentElement;
    root.classList.remove("lang-switching");
    void root.offsetWidth;
    root.classList.add("lang-switching");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => root.classList.remove("lang-switching"),
      600,
    );
    setLangState(next);
  };

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang needs a LangProvider.");
  return value;
}
