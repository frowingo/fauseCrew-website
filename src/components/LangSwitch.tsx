import { useId } from "react";
import { useLang, type Lang } from "../lib/i18n";

/** A five-pointed star around (cx, cy) with one point aimed at `angle` degrees. */
function star(cx: number, cy: number, radius: number, angle: number) {
  return Array.from({ length: 10 }, (_, index) => {
    const r = index % 2 ? radius * 0.382 : radius;
    const a = ((angle + index * 36) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}
const turkeyStar = star(20.4, 16, 3.3, 180);

function TurkeyFlag() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" fill="#e30a17" />
      <circle cx="12.6" cy="16" r="8" fill="#fff" />
      <circle cx="14.6" cy="16" r="6.4" fill="#e30a17" />
      <polygon points={turkeyStar} fill="#fff" />
    </svg>
  );
}

const stripe = 32 / 13;

/** Half the Stars and Stripes, half the Union Jack, split along the diagonal. */
function UsUkFlag() {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <clipPath id={`${id}-us`}>
        <polygon points="0,0 32,0 0,32" />
      </clipPath>
      <clipPath id={`${id}-uk`}>
        <polygon points="32,0 32,32 0,32" />
      </clipPath>
      <g clipPath={`url(#${id}-us)`}>
        <rect width="32" height="32" fill="#fff" />
        {Array.from({ length: 7 }, (_, index) => (
          <rect
            key={index}
            y={index * 2 * stripe}
            width="32"
            height={stripe}
            fill="#b22234"
          />
        ))}
        <rect width="14.4" height={stripe * 7} fill="#3c3b6e" />
        {[3, 7.2, 11.4].flatMap((x) =>
          [3.4, 8.6, 13.8].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.85" fill="#fff" />
          )),
        )}
      </g>
      <g clipPath={`url(#${id}-uk)`}>
        <rect width="32" height="32" fill="#012169" />
        <path d="M0 0 32 32M32 0 0 32" stroke="#fff" strokeWidth="6.4" />
        <path d="M0 0 32 32M32 0 0 32" stroke="#c8102e" strokeWidth="2.2" />
        <path d="M16 0v32M0 16h32" stroke="#fff" strokeWidth="6.4" />
        <path d="M16 0v32M0 16h32" stroke="#c8102e" strokeWidth="3.4" />
      </g>
      <path d="M32 0 0 32" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

const flags: Record<Lang, typeof TurkeyFlag> = { tr: TurkeyFlag, en: UsUkFlag };

const codes = Object.keys(flags) as Lang[];

/**
 * Built like the theme switch: the chosen language's flag is the knob and rolls across
 * the track, and the other language waits on the free side as its code. A press anywhere
 * on the track switches to that other language, so the button is named after it.
 */
export function LangSwitch() {
  const { lang, setLang, t } = useLang();
  const Flag = flags[lang];
  const other: Lang = lang === "tr" ? "en" : "tr";
  return (
    <button
      type="button"
      className="lang-switch"
      data-lang={lang}
      aria-label={t.lang[other]}
      title={t.lang[other]}
      lang={other}
      onClick={() => setLang(other)}
    >
      {codes.map((code) => (
        <span
          key={code}
          className={`lang-code code-${code}`}
          aria-hidden="true"
        >
          {code.toUpperCase()}
        </span>
      ))}
      <span className="lang-knob" aria-hidden="true">
        <span className="lang-flag" key={lang}>
          <Flag />
        </span>
        <span className="knob-face" />
      </span>
    </button>
  );
}
