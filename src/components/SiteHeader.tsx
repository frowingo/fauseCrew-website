import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  ArrowRight,
  CircleHelp,
  Gamepad2,
  Route,
  Sparkles,
} from "lucide-react";
import { useLang } from "../lib/i18n";
import { Brand } from "./Brand";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "ozellikler", icon: Sparkles },
  { id: "oyunlar", icon: Gamepad2 },
  { id: "nasil-calisir", icon: Route },
  { id: "sorular", icon: CircleHelp },
] as const;

/** The section under the reading line (40% down the viewport), if it is one of the links. */
function currentSection() {
  const line = window.innerHeight * 0.4;
  for (const link of links) {
    const box = document.getElementById(link.id)?.getBoundingClientRect();
    if (box && box.top <= line && box.bottom > line) return link.id;
  }
  return null;
}

/**
 * Floating header: it blends into the hero at the top and condenses into a glass island,
 * like the app's floating tab bar, once the page scrolls. The island tracks reading
 * progress and slides a highlight to the section in view.
 */
export function SiteHeader() {
  const { lang, t } = useLang();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<CSSProperties>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      headerRef.current?.style.setProperty(
        "--scroll",
        (max > 0 ? Math.min(window.scrollY / max, 1) : 0).toFixed(4),
      );
      setScrolled(window.scrollY > 24);
      setActive(currentSection());
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Keeps the last position while no section is active, so the highlight fades in place.
  useLayoutEffect(() => {
    const measure = () => {
      const link = navRef.current?.querySelector<HTMLElement>(
        `[data-section="${active}"]`,
      );
      if (!link) return;
      setIndicator({
        "--x": `${link.offsetLeft}px`,
        "--w": `${link.offsetWidth}px`,
      } as CSSProperties);
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, lang]);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 961px)");
    const close = () => setMenuOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [menuOpen]);

  const className = [
    "site-header",
    scrolled && "is-scrolled",
    menuOpen && "is-menu-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={headerRef} className={className}>
      <span className="menu-scrim" onClick={() => setMenuOpen(false)} />
      <div className="nav-shell">
        <Brand />
        <nav ref={navRef} aria-label={t.header.nav} className="nav-links">
          <span
            className={active ? "nav-indicator is-on" : "nav-indicator"}
            style={indicator}
            aria-hidden="true"
          />
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-section={link.id}
              aria-current={active === link.id ? "location" : undefined}
            >
              <link.icon size={15} aria-hidden="true" />
              {t.header.links[link.id].label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <LangSwitch />
          <ThemeToggle />
          <a className="button button-small header-cta" href="#indir">
            {t.header.cta} <ArrowRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span className="burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
        <span className="nav-progress" aria-hidden="true" />

        <nav
          id="site-menu"
          className="menu-sheet"
          aria-label={t.header.mobileNav}
          inert={!menuOpen}
        >
          <div className="menu-tiles">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="menu-tile"
                style={{ "--i": index } as CSSProperties}
                aria-current={active === link.id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-tile-icon">
                  <link.icon size={18} aria-hidden="true" />
                </span>
                <strong>{t.header.links[link.id].label}</strong>
                <small>{t.header.links[link.id].hint}</small>
              </a>
            ))}
          </div>
          <div className="menu-footer">
            <a
              className="button menu-cta"
              href="#indir"
              onClick={() => setMenuOpen(false)}
            >
              {t.header.cta} <ArrowRight size={16} />
            </a>
            <span className="menu-note">
              <span className="store-dot" /> {t.header.storeNote}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
