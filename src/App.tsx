import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Gamepad2,
  Heart,
  Home,
  ListChecks,
  Megaphone,
  Menu,
  MoveUpRight,
  Users,
  X,
} from "lucide-react";
import { Brand } from "./components/Brand";
import { StoreLinks } from "./components/StoreLinks";
import {
  AppPreview,
  FloatingNotes,
  type PreviewTab,
} from "./components/AppPreview";

const features = [
  {
    id: "home" as const,
    icon: ListChecks,
    title: "“Bugün kimin sırası?”",
    text: "Görevler belli, herkesin içi rahat. Ev işlerini paylaşın, yapılanları tek bir yerden takip edin.",
    detail: "Görevleri paylaş, birlikte tamamla.",
  },
  {
    id: "crew" as const,
    icon: Users,
    title: "Herkes aynı sayfada.",
    text: "Evinize özel bir alan oluşturun. Ekibinizi davet edin, ev arkadaşlarınızı bir arada görün, ortak yaşamı birlikte düzenleyin.",
    detail: "Eviniz kadar size özel bir alan.",
  },
  {
    id: "games" as const,
    icon: Gamepad2,
    title: "Biraz da eğlence.",
    text: "Ev arkadaşlığı yapılacaklar listesinden ibaret değil. Küçük bir mola verin, oyunlarda birbirinize meydan okuyun.",
    detail: "Rekabet tatlı, ekip hep aynı.",
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
      "Hayır. Bu sayfadaki ekran, uygulamayı tanıtan örnek bir deneyimdir. İsimler, görevler ve puanlar örnektir; yaptığın değişiklikler kaydedilmez ve sayfa yenilendiğinde sıfırlanır.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState<PreviewTab>("home");
  const [featureTab, setFeatureTab] = useState<PreviewTab>("home");
  const activeFeature = features.find((feature) => feature.id === featureTab)!;
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
            <a onClick={() => setMenuOpen(false)} href="#nasil-calisir">
              Nasıl çalışır?
            </a>
            <a onClick={() => setMenuOpen(false)} href="#sorular">
              Merak edilenler
            </a>
          </nav>
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
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Aynı ev.
              <br />
              Aynı <span>ekip.</span>
            </h1>
            <p className="hero-description">
              Birlikte yaşamanın güzel tarafına
              <br className="desktop-break" /> daha çok zaman ayırın.
            </p>
            <p className="hero-detail">
              Görevleri paylaşın, planları kaçırmayın, birlikte eğlenin.
              Evinizin ortak alanı artık cebinizde.
            </p>
            <StoreLinks />
            <a className="text-link hero-explore" href="#ozellikler">
              Evinizin yeni halini keşfet <ArrowDown size={16} />
            </a>
            <div className="hero-audience">
              <span>
                <Heart size={14} /> Ev arkadaşları, çiftler ve aileler için.
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <span className="visual-spark spark-one" />
            <span className="visual-spark spark-two" />
            <FloatingNotes />
            <AppPreview tab={previewTab} onTabChange={setPreviewTab} />
            <p className="preview-caption">
              <span /> Örnek ekran · Görevlere dokun, keşfet.
            </p>
          </div>
        </section>
        <div className="promise-strip">
          <div className="container">
            <span>
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
          <div className="section-intro">
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
            <div className="feature-list" aria-label="Uygulama özellikleri">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`feature-choice ${featureTab === feature.id ? "feature-active" : ""}`}
                  onClick={() => setFeatureTab(feature.id)}
                  aria-pressed={featureTab === feature.id}
                  aria-controls="feature-preview"
                >
                  <span className="feature-icon">
                    <feature.icon size={23} />
                  </span>
                  <span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    {featureTab === feature.id && (
                      <span className="feature-discover">
                        Önizlemeyi keşfet <ArrowRight size={15} />
                      </span>
                    )}
                  </span>
                  <ChevronDown size={18} className="feature-chevron" />
                </button>
              ))}
            </div>
            <div
              className={`feature-stage stage-${featureTab}`}
              id="feature-preview"
            >
              <div className="stage-heading">
                <activeFeature.icon size={22} />
                <span>{activeFeature.detail}</span>
              </div>
              <AppPreview tab={featureTab} onTabChange={setFeatureTab} />
              <p className="stage-caption">
                Uygulamadan ilham alan etkileşimli örnek.
              </p>
            </div>
          </div>
        </section>
        <section className="announcement-section container">
          <div className="announcement-art">
            <span className="announcement-orbit" />
            <div className="announcement-paper">
              <span className="paper-icon">
                <Megaphone size={24} />
              </span>
              <div>
                <span className="paper-label">EVİN DUYURU PANOSU</span>
                <h3>
                  Akşam sofrada
                  <br />
                  buluşalım mı?
                </h3>
                <p>
                  Ben makarnayı yapıyorum.
                  <br />
                  Sofrayı kim kuruyor?
                </p>
                <div className="paper-author">
                  <span className="avatar sage">D</span>
                  <span>
                    Deniz <small>· Az önce</small>
                  </span>
                  <Heart size={17} />
                </div>
              </div>
            </div>
            <span className="sample-label">Örnek duyuru</span>
          </div>
          <div className="announcement-copy">
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
              <Check size={17} /> Evin gündeminden birlikte haberdar olun.
            </span>
          </div>
        </section>
        <section id="nasil-calisir" className="how-section">
          <div className="container">
            <div className="section-intro">
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
            <div className="steps">
              <article>
                <span className="step-number">01</span>
                <div className="step-top">
                  <Home size={26} />
                  <span className="step-line" />
                </div>
                <h3>Evini oluştur.</h3>
                <p>
                  Uygulamada evine bir isim ver.
                  <br />
                  Ortak alanınız hazır.
                </p>
              </article>
              <article>
                <span className="step-number">02</span>
                <div className="step-top">
                  <Users size={26} />
                  <span className="step-line" />
                </div>
                <h3>Ekibini davet et.</h3>
                <p>
                  Davet kodunu ev arkadaşlarınla paylaş.
                  <br />
                  Aynı çatı altında buluşun.
                </p>
              </article>
              <article>
                <span className="step-number">03</span>
                <div className="step-top">
                  <Heart size={26} />
                </div>
                <h3>Hayatı paylaşın.</h3>
                <p>
                  İşleri bölüşün, planları paylaşın.
                  <br />
                  Güzel anlara daha çok yer açın.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="sorular" className="faq-section container">
          <div>
            <h2>
              Aklında
              <br />
              <span>bir şey mi var?</span>
            </h2>
            <p>Başlamadan önce merak ettiklerin.</p>
          </div>
          <div className="faq-list">
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
          <div className="download-surface">
            <div>
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
              <img src="/app-icon.svg" alt="" />
              <div>
                <span className="avatar peach">E</span>
                <span className="avatar sage">D</span>
                <span className="avatar lilac">C</span>
                <span className="avatar plus">+</span>
              </div>
              <span>Sizin ev. Sizin ekip.</span>
            </div>
            <MoveUpRight
              className="download-arrow"
              size={100}
              strokeWidth={0.7}
            />
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
            <a href="#nasil-calisir">Nasıl çalışır?</a>
            <a href="#sorular">Sıkça sorulanlar</a>
          </div>
          <a className="back-top" href="#">
            Yukarı dön <MoveUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FausCrew</span>
          <span>Bir evden daha fazlası, bir ekip.</span>
          <span className="footer-heart">
            <Heart size={13} /> Birlikte daha iyi.
          </span>
        </div>
      </footer>
    </>
  );
}
