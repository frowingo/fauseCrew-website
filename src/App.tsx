import { useState, type PointerEvent } from "react";
import {
  ArrowDown,
  Bot,
  Check,
  ChevronDown,
  Clock,
  CircleUserRound,
  Gamepad2,
  Heart,
  House,
  ListChecks,
  Megaphone,
  MoveUpRight,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import {
  AmbientLines,
  MeshTexture,
  AppIcon,
  Brand,
  FausMark,
  HeroGeometry,
} from "./components/Brand";
import { StoreLinks } from "./components/StoreLinks";
import { SiteHeader } from "./components/SiteHeader";
import {
  AppPreview,
  FloatingNotes,
  GameCover,
  games,
  type PreviewFocus,
} from "./components/AppPreview";
import { useLang } from "./lib/i18n";
import { useReveal } from "./lib/reveal";

// Texts come from `content.ts`; these only pair each item with its icon.
const features = [
  { id: "chores", icon: ListChecks },
  { id: "announcements", icon: Users },
  { id: "games", icon: Gamepad2 },
] as const satisfies readonly { id: PreviewFocus; icon: unknown }[];
const stepIcons = [House, Users, Heart];
const promiseIcons = [ListChecks, Megaphone, Gamepad2];
const footerLinks = [
  "ozellikler",
  "oyunlar",
  "nasil-calisir",
  "sorular",
] as const;

function tilt(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const box = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;
  const y = (event.clientY - box.top) / box.height - 0.5;
  event.currentTarget.style.setProperty(
    "--tilt-x",
    `${(-y * 8).toFixed(2)}deg`,
  );
  event.currentTarget.style.setProperty(
    "--tilt-y",
    `${(x * 10).toFixed(2)}deg`,
  );
}
function resetTilt(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
}

export default function App() {
  const { t } = useLang();
  const [featureTab, setFeatureTab] = useState<PreviewFocus>("chores");
  const activeFeature = features.find((feature) => feature.id === featureTab)!;
  useReveal();
  return (
    <>
      <MeshTexture />
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <SiteHeader />
      <main id="main">
        <div className="hero-backdrop">
          <AmbientLines className="page-lines" weight={1.4} />
          <span className="hero-ember" />
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 id="hero-title">
                {t.hero.before}
                <span className="gradient-text">{t.hero.accent}</span>
                {t.hero.after}
              </h1>
              <p className="hero-description">
                {t.hero.description[0]}
                <br className="desktop-break" /> {t.hero.description[1]}
              </p>
              <p className="hero-detail">{t.hero.detail}</p>
              <StoreLinks />
              <a className="text-link hero-explore" href="#ozellikler">
                {t.hero.explore} <ArrowDown size={16} />
              </a>
            </div>
            <div
              className="hero-visual"
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
            >
              <span className="hero-halo" />
              <FausMark className="hero-mark" animated />
              <FloatingNotes />
              <AppPreview className="hero-phone" />
              <p className="preview-caption">
                <span /> {t.hero.caption}
              </p>
            </div>
          </section>
        </div>

        <div className="promise-strip">
          <HeroGeometry />
          <div className="container">
            <span className="promise-lead">
              {t.promise.lead}
              <br />
              <strong>{t.promise.leadStrong}</strong>
            </span>
            {t.promise.items.map((item, index) => {
              const Icon = promiseIcons[index];
              return (
                <div key={index}>
                  <Icon />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        <section id="ozellikler" className="features-section container">
          <div className="section-intro" data-reveal>
            <h2>
              {t.features.title[0]}
              <br />
              <span>{t.features.title[1]}</span>
            </h2>
            <p>
              {t.features.intro[0]}
              <br />
              {t.features.intro[1]}
            </p>
          </div>
          <div className="feature-layout">
            <div
              className="feature-list"
              aria-label={t.features.listLabel}
              data-reveal
            >
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`feature-choice ${featureTab === feature.id ? "feature-active" : ""}`}
                  onClick={() => setFeatureTab(feature.id)}
                  aria-pressed={featureTab === feature.id}
                  aria-controls="feature-preview"
                >
                  <span className="feature-icon">
                    <feature.icon size={22} />
                  </span>
                  <span>
                    <h3>{t.features.items[feature.id].title}</h3>
                    <p>{t.features.items[feature.id].text}</p>
                  </span>
                  <ChevronDown size={18} className="feature-chevron" />
                </button>
              ))}
            </div>
            <div className="feature-stage" id="feature-preview" data-reveal>
              <AmbientLines className="stage-lines" />
              <div className="stage-heading" key={activeFeature.id}>
                <activeFeature.icon size={18} />
                <span>{t.features.items[activeFeature.id].detail}</span>
              </div>
              <AppPreview focus={featureTab} />
              <p className="stage-caption">{t.features.caption}</p>
            </div>
          </div>
        </section>

        <section className="announcement-section container">
          <div className="announcement-art" data-reveal>
            <span className="announcement-glow" />
            <div className="announcement-sample">
              <div className="sample-header">
                <span className="sample-tile">
                  <Megaphone size={22} />
                  <span className="tile-dot" />
                  <span className="tile-badge">1</span>
                </span>
                <span>
                  <strong>{t.announcement.sampleTitle}</strong>
                  <small>{t.announcement.sampleUnread}</small>
                </span>
                <span className="sample-chevron">
                  <ChevronDown size={16} strokeWidth={2.8} />
                </span>
              </div>
              <div className="sample-body">
                <strong>
                  <span className="unread-dot" /> {t.announcement.sampleHeading}
                </strong>
                <p>{t.announcement.sampleBody}</p>
                <div className="sample-meta">
                  <span>
                    <Clock size={13} /> {t.announcement.sampleTime}
                  </span>
                  <span className="publisher">
                    <CircleUserRound size={13} />{" "}
                    {t.announcement.samplePublisher}
                  </span>
                </div>
              </div>
            </div>
            <span className="sample-label">{t.announcement.sampleLabel}</span>
          </div>
          <div className="announcement-copy" data-reveal>
            <h2>
              {t.announcement.title[0]}
              <br />
              <span>{t.announcement.title[1]}</span>
            </h2>
            <p>{t.announcement.text}</p>
            <span className="inline-check">
              <Check size={17} /> {t.announcement.check}
            </span>
          </div>
        </section>

        <section id="oyunlar" className="games-section">
          <div className="container">
            <div className="section-intro games-intro" data-reveal>
              <h2>
                {t.games.title[0]}
                <br />
                <span>{t.games.title[1]}</span>
              </h2>
              <p>{t.games.intro}</p>
            </div>
            <div className="play-modes" data-reveal>
              <article className="play-mode mode-bot">
                <span className="mode-visual" aria-hidden="true">
                  <span className="mode-duel">
                    <span className="mode-avatar">E</span>
                    <span className="mode-vs">VS</span>
                    <span className="mode-avatar is-bot">
                      <Bot size={20} strokeWidth={2.2} />
                    </span>
                  </span>
                </span>
                <span className="mode-copy">
                  <span className="mode-label">
                    <WifiOff size={14} strokeWidth={2.4} /> {t.games.bot.label}
                  </span>
                  <h3>{t.games.bot.title}</h3>
                  <p>{t.games.bot.text}</p>
                </span>
              </article>
              <article className="play-mode mode-online">
                <span className="mode-visual" aria-hidden="true">
                  <span className="mode-stack">
                    <span>E</span>
                    <span>F</span>
                    <span>EC</span>
                  </span>
                  <span className="mode-live">
                    <span /> {t.games.online.live}
                  </span>
                </span>
                <span className="mode-copy">
                  <span className="mode-label">
                    <Wifi size={14} strokeWidth={2.4} /> {t.games.online.label}
                  </span>
                  <h3>{t.games.online.title}</h3>
                  <p>{t.games.online.text}</p>
                </span>
              </article>
            </div>
          </div>
          <div className="games-rail" data-reveal>
            <div className="games-track">
              {[...games, ...games].map((game, index) => (
                <article
                  className="showcase-game"
                  key={`${game.id}-${index}`}
                  aria-hidden={index >= games.length}
                >
                  <GameCover id={game.id} />
                  <span>
                    <strong>{t.games.items[game.id].title}</strong>
                    <small>{t.games.items[game.id].text}</small>
                    {"modes" in game && (
                      <span className="game-modes">
                        {game.modes.map((mode) => (
                          <span key={mode} className={`mode-chip chip-${mode}`}>
                            {mode === "bot" ? (
                              <Bot size={13} strokeWidth={2.4} />
                            ) : (
                              <Wifi size={13} strokeWidth={2.4} />
                            )}
                            {t.games.chips[mode]}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nasil-calisir" className="how-section">
          <div className="container">
            <div className="section-intro" data-reveal>
              <h2>
                {t.how.title[0]}
                <br />
                <span>{t.how.title[1]}</span>
              </h2>
              <p>
                {t.how.intro[0]}
                <br />
                {t.how.intro[1]}
              </p>
            </div>
            <ol className="steps">
              {t.how.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <li key={index} data-reveal>
                    <span className="step-top">
                      <span className="step-icon">
                        <Icon size={24} />
                      </span>
                      <span className="step-number">0{index + 1}</span>
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="sorular" className="faq-section container">
          <div data-reveal>
            <h2>
              {t.faq.title[0]}
              <br />
              <span>{t.faq.title[1]}</span>
            </h2>
            <p>{t.faq.intro}</p>
          </div>
          <div className="faq-list" data-reveal>
            {t.faq.items.map((faq, index) => (
              <details key={index}>
                <summary>
                  {faq.question}
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="indir" className="download-section container">
          <div className="download-surface" data-reveal>
            <HeroGeometry />
            <div className="download-copy">
              <h2>
                {t.download.title[0]}
                <br />
                {t.download.title[1]}
              </h2>
              <p>{t.download.text}</p>
              <StoreLinks />
              <span className="release-note">{t.download.note}</span>
            </div>
            <div className="download-brand" aria-hidden="true">
              <span className="download-badge">
                <FausMark animated />
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-links">
            {footerLinks.map((id) => (
              <a key={id} href={`#${id}`}>
                {t.footer.links[id]}
              </a>
            ))}
          </div>
          <a className="back-top" href="#">
            {t.footer.backTop} <MoveUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FausCrew</span>
          <span className="footer-made">
            <AppIcon size={16} /> {t.footer.made}
          </span>
          <span className="footer-heart">
            <Heart size={13} /> {t.footer.heart}
          </span>
        </div>
      </footer>
    </>
  );
}
