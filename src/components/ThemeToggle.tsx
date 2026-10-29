import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type ThemeChoice } from "../lib/theme";

const options: { id: ThemeChoice; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Açık tema", icon: Sun },
  { id: "system", label: "Sistem teması", icon: Monitor },
  { id: "dark", label: "Koyu tema", icon: Moon },
];

export function ThemeToggle() {
  const [choice, setChoice] = useTheme();
  return (
    <div className="theme-toggle" role="group" aria-label="Görünüm">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setChoice(option.id)}
          aria-pressed={choice === option.id}
          aria-label={option.label}
          title={option.label}
        >
          <option.icon size={15} />
        </button>
      ))}
    </div>
  );
}
