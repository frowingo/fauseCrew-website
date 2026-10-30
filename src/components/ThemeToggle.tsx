import { Moon, Sun } from "lucide-react";
import { useLang } from "../lib/i18n";
import { useTheme } from "../lib/theme";

/**
 * Light/dark switch. The knob is a sun that rolls across and turns into a crescent moon;
 * the icon of the other theme waits on the free side of the track.
 */
export function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const { t } = useLang();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-switch"
      role="switch"
      aria-checked={dark}
      aria-label={t.theme.label}
      title={dark ? t.theme.toLight : t.theme.toDark}
      onClick={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        toggle({ x: box.left + box.width / 2, y: box.top + box.height / 2 });
      }}
    >
      <Sun className="switch-icon switch-sun" size={14} aria-hidden="true" />
      <Moon className="switch-icon switch-moon" size={14} aria-hidden="true" />
      <span className="switch-knob" aria-hidden="true">
        <span className="knob-face" />
      </span>
    </button>
  );
}
