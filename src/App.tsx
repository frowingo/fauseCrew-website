import { useState, type PointerEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  CircleUserRound,
  Gamepad2,
  Heart,
  House,
  ListChecks,
  Megaphone,
  Menu,
  MoveUpRight,
  Users,
  X,
} from "lucide-react";
import {
  AmbientLines,
  AppIcon,
  Brand,
  FausMark,
  HeroGeometry,
} from "./components/Brand";
import { StoreLinks } from "./components/StoreLinks";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  AppPreview,
  FloatingNotes,
  GameCover,
  games,
  type PreviewTab,
} from "./components/AppPreview";
import { useReveal } from "./lib/reveal";

const features = [
  {
    id: "home" as const,
    icon: ListChecks,
    title: "“Bugün kimin sırası?”",
    text: "Görevler belli, herkesin içi rahat. Ev işlerini paylaşın, yapılanları tek bir yerden takip edin.",
    detail: "Görevlere dokun, durumunu ilerlet.",
  },
  {
    id: "profile" as const,
    icon: Users,
    title: "Herkes aynı sayfada.",
    text: "Evinize özel bir alan oluşturun. Davet koduyla ekibinizi çağırın, ev arkadaşlarınızı bir arada görün.",
    detail: "Davet kodu oluşturmayı dene.",
  },
  {
    id: "games" as const,
    icon: Gamepad2,
    title: "Biraz da eğlence.",
    text: "Ev arkadaşlığı yapılacaklar listesinden ibaret değil. Küçük bir mola verin, oyunlarda birbirinize meydan okuyun.",
    detail: "Rekabet tatlı, ekip hep aynı.",
  },
];
const steps = [
  {
    icon: House,
    title: "Evini oluştur.",
    text: "Uygulamada evine bir isim ver. Ortak alanınız hazır.",
  },
  {
    icon: Users,
    title: "Ekibini davet et.",
    text: "Davet kodunu ev arkadaşlarınla paylaş. Aynı çatı altında buluşun.",
  },
  {
    icon: Heart,
    title: "Hayatı paylaşın.",
    text: "İşleri bölüşün, planları paylaşın. Güzel anlara daha çok yer açın.",
  },
];
const faqs = [
  {
    question: "FausCrew kimler için?",
    answer:
      "Aynı evi paylaşan herkes için: ev arkadaşları, çiftler ve aileler. Görevleri, ev içi duyuruları ve birlikte geçirilen zamanı ortak bir yerde buluşturur.",
  },
  {
    question: "Ev arkadaşlarımı nasıl davet ederim?",
    answer:
      "Mobil uygulamada evini oluşturduktan sonra evine ait davet kodunu paylaşabilirsin. Ev arkadaşların bu kodla aynı eve katılabilir.",
  },
  {
    question: "Hangi telefonlarda kullanabileceğim?",
    answer:
      "FausCrew, iOS ve Android için hazırlanıyor. App Store ve Google Play bağlantıları yayınlandığında bu sayfadan ulaşabileceksin.",
  },
  {
    question: "Sitedeki önizleme gerçek hesabıma bağlı mı?",
    answer:
      "Hayır. Bu sayfadaki ekran, uygulamayı tanıtan örnek bir deneyimdir. İsimler, görevler ve davet kodu örnektir; yaptığın değişiklikler kaydedilmez ve sayfa yenilendiğinde sıfırlanır.",
  },
];

function tilt(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const box = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;
  const y = (event.clientY - box.top) / box.height - 0.5;
  event.currentTarget.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
}
function resetTilt(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState<PreviewTab>("home");
  const [featureTab, setFeatureTab] = useState<PreviewTab>("home");
  const activeFeature = features.find((feature) => feature.id === featureTab)!;
  useReveal();
  return (
    <>
      <a href="#main" className="skip-link">
        İçeriğe geç
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <Brand />
          <nav
            aria-label="Ana menü"
            className={menuOpen ? "nav-links nav-open" : "nav-links"}
          >
            <a onClick={() => setMenuOpen(false)} href="#ozellikler">
              Neler var?
            </a>
            <a onClick={() => setMenuOpen(false)} href="#oyunlar">
              Oyunlar
            </a>
            <a onClick={() => setMenuOpen(false)} href="#nasil-calisir">
              Nasıl çalışır?
            </a>
            <a onClick={() => setMenuOpen(false)} href="#sorular">
              Merak edilenler
            </a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="button button-small header-cta" href="#indir">
              Ekibinle tanış <ArrowRight size={15} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="hero-backdrop">
          <AmbientLines className="page-lines" weight={1.4} />
          <span className="hero-ember" />
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" /> iOS ve Android için hazırlanıyor
              </span>
              <h1 id="hero-title">
                Aynı ev.
                <br />
                Aynı <span className="gradient-text">ekip.</span>
              </h1>
              <p className="hero-description">
                Birlikte yaşamanın güzel tarafına
                <br className="desktop-break" /> daha çok zaman ayırın.
              </p>
              <p className="hero-detail">
                Görevleri paylaşın, duyuruları kaçırmayın, birlikte eğlenin.
                Evinizin ortak alanı artık cebinizde.
              </p>
              <StoreLinks />
              <a className="text-link hero-explore" href="#ozellikler">
                Evinizin yeni halini keşfet <ArrowDown size={16} />
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
              <AppPreview
                className="hero-phone"
                tab={previewTab}
                onTabChange={setPreviewTab}
              />
              <p className="preview-caption">
                <span /> Örnek ekran · Dokun, keşfet.
              </p>
            </div>
          </section>
        </div>

        <div className="promise-strip">
          <HeroGeometry />
          <div className="container">
            <span className="promise-lead">
              Ev paylaşılır.
              <br />
              <strong>Hayat kolaylaşır.</strong>
            </span>
            <div>
              <ListChecks />
              <span>Daha az “kim yapacak?”</span>
            </div>
            <div>
              <Megaphone />
              <span>Daha çok haberdar olmak.</span>
            </div>
            <div>
              <Gamepad2 />
              <span>Birlikte biraz daha eğlenmek.</span>
            </div>
          </div>
        </div>

        <section id="ozellikler" className="features-section container">
          <div className="section-intro" data-reveal>
            <h2>
              Evin akışı,
              <br />
              <span>ekibin ritmi.</span>
            </h2>
            <p>
              Küçük işler, ortak planlar, güzel molalar.
              <br />
              Bir evin ihtiyacı olan şeyler, bir arada.
            </p>
          </div>
          <div className="feature-layout">
            <div
              className="feature-list"
              aria-label="Uygulama özellikleri"
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
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </span>
                  <ChevronDown size={18} className="feature-chevron" />
                </button>
              ))}
            </div>
            <div className="feature-stage" id="feature-preview" data-reveal>
              <AmbientLines className="stage-lines" />
              <div className="stage-heading" key={activeFeature.id}>
                <activeFeature.icon size={18} />
                <span>{activeFeature.detail}</span>
              </div>
              <AppPreview tab={featureTab} onTabChange={setFeatureTab} />
              <p className="stage-caption">
                Uygulamanın ekranlarıyla aynı, etkileşimli örnek.
              </p>
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
                  <strong>Duyurular</strong>
                  <small>1 okunmamış duyuru</small>
                </span>
                <span className="sample-chevron">
                  <ChevronDown size={16} strokeWidth={2.8} />
                </span>
              </div>
              <div className="sample-body">
                <strong>
                  <span className="unread-dot" /> Akşam sofrada buluşalım mı?
                </strong>
                <p>Ben makarnayı yapıyorum. Sofrayı kim kuruyor?</p>
                <div className="sample-meta">
                  <span>
                    <Clock size={13} /> Az önce
                  </span>
                  <span className="publisher">
                    <CircleUserRound size={13} /> Deniz yayınladı
                  </span>
                </div>
              </div>
            </div>
            <span className="sample-label">Örnek duyuru</span>
          </div>
          <div className="announcement-copy" data-reveal>
            <h2>
              Grup sohbetinde
              <br />
              <span>kaybolup gitmesin.</span>
            </h2>
            <p>
              Film gecesi, ortak bir plan ya da küçük bir hatırlatma. Eve dair
              duyurular herkesin görebileceği, evinize ait bir yerde dursun.
            </p>
            <span className="inline-check">
              <Check size={17} /> Okunmamış duyurular en üstte kalır.
            </span>
          </div>
        </section>

        <section id="oyunlar" className="games-section">
          <div className="container">
            <div className="section-intro games-intro" data-reveal>
              <h2>
                İşler bitti mi?
                <br />
                <span>Sıra oyunda.</span>
              </h2>
              <p>
                Kısa turlar, tatlı rekabet. Ev arkadaşlarınla aynı odada ya da
                uzaktan, birbirinize meydan okuyun.
              </p>
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
                    <strong>{game.title}</strong>
                    <small>{game.text}</small>
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
                Birlikte başlamak
                <br />
                <span>bu kadar kolay.</span>
              </h2>
              <p>
                Önce evin, sonra ekibin.
                <br />
                Gerisi birlikte şekillenir.
              </p>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} data-reveal>
                  <span className="step-top">
                    <span className="step-icon">
                      <step.icon size={24} />
                    </span>
                    <span className="step-number">0{index + 1}</span>
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sorular" className="faq-section container">
          <div data-reveal>
            <h2>
              Aklında
              <br />
              <span>bir şey mi var?</span>
            </h2>
            <p>Başlamadan önce merak ettiklerin.</p>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.question}>
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
                Eviniz güzel.
                <br />
                Birlikte daha güzel.
              </h2>
              <p>Ekibini bir araya getir. Gerisini birlikte halledin.</p>
              <StoreLinks />
              <span className="release-note">
                iOS ve Android için hazırlanıyoruz. Çok yakında.
              </span>
            </div>
            <div className="download-brand" aria-hidden="true">
              <span className="download-badge">
                <FausMark animated />
              </span>
              <div className="avatar-stack">
                <span className="avatar avatar-indigo">E</span>
                <span className="avatar avatar-teal">D</span>
                <span className="avatar avatar-purple">C</span>
                <span className="avatar avatar-plus">+</span>
              </div>
              <span>Sizin ev. Sizin ekip.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>Birlikte yaşamanın güzel tarafı.</p>
          </div>
          <div className="footer-links">
            <a href="#ozellikler">Özellikler</a>
            <a href="#oyunlar">Oyunlar</a>
            <a href="#nasil-calisir">Nasıl çalışır?</a>
            <a href="#sorular">Sıkça sorulanlar</a>
          </div>
          <a className="back-top" href="#">
            Yukarı dön <MoveUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FausCrew</span>
          <span className="footer-made">
            <AppIcon size={16} /> Bir evden daha fazlası, bir ekip.
          </span>
          <span className="footer-heart">
            <Heart size={13} /> Birlikte daha iyi.
          </span>
        </div>
      </footer>
    </>
  );
}
