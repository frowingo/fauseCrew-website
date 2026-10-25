import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  Check,
  ChevronRight,
  Gamepad2,
  Home,
  ListChecks,
  Megaphone,
  Plus,
  Signal,
  BatteryFull,
  Trophy,
  Users,
  Wifi,
} from "lucide-react";

export type PreviewTab = "home" | "crew" | "games";
const initialChores = [
  { id: 1, title: "Mutfağı toparla", person: "E", color: "peach", done: false },
  { id: 2, title: "Bitkileri sula", person: "D", color: "sage", done: true },
  { id: 3, title: "Çöpü çıkar", person: "C", color: "lilac", done: false },
];
const members = [
  { name: "Ece", initial: "E", color: "peach", role: "Sen", points: 120 },
  {
    name: "Deniz",
    initial: "D",
    color: "sage",
    role: "Ev arkadaşı",
    points: 150,
  },
  {
    name: "Can",
    initial: "C",
    color: "lilac",
    role: "Ev arkadaşı",
    points: 90,
  },
];

export function AppPreview({
  tab,
  onTabChange,
}: {
  tab: PreviewTab;
  onTabChange: (tab: PreviewTab) => void;
}) {
  const [chores, setChores] = useState(initialChores);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const completed = chores.filter((chore) => chore.done).length;
  return (
    <div className="phone" aria-label="FauseCrew etkileşimli örnek ekranı">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <div className="dynamic-island" />
          <span>
            <Signal size={13} />
            <Wifi size={13} />
            <BatteryFull size={17} />
          </span>
        </div>
        <div className="phone-content">
          <div className="phone-topline">
            <span>
              <img src="/app-icon.svg" alt="" />
              FauseCrew
            </span>
            <span className="avatar peach">E</span>
          </div>
          <div className="app-greeting">
            <div>
              <small>Moda’daki evimiz</small>
              <h3>
                {tab === "home"
                  ? "Merhaba, Ece!"
                  : tab === "crew"
                    ? "Bizim ekip"
                    : "Biraz oyun zamanı."}
              </h3>
              <p>
                {tab === "home"
                  ? "İyi ki aynı evdeyiz."
                  : tab === "crew"
                    ? "Bu evi birlikte ev yapıyoruz."
                    : "İşler biter, eğlence başlar."}
              </p>
            </div>
            <Home size={43} strokeWidth={1.3} />
          </div>
          {tab === "home" && (
            <div className="phone-panel">
              <button
                className={`app-notice ${noticeOpen ? "notice-open" : ""}`}
                onClick={() => setNoticeOpen(!noticeOpen)}
                aria-expanded={noticeOpen}
              >
                <span className="notice-icon">
                  <Megaphone size={17} />
                </span>
                <span>
                  <strong>Bu akşam film gecesi!</strong>
                  <small>
                    {noticeOpen
                      ? "Deniz: 20.30’da salonda buluşalım. Filmi birlikte seçeriz!"
                      : "Deniz · 10 dakika önce"}
                  </small>
                </span>
                <ChevronRight size={15} />
              </button>
              <div className="app-chores">
                <div className="app-section-title">
                  <span>
                    <ListChecks size={18} />
                    Bugünün görevleri
                  </span>
                  <small>{completed}/3</small>
                </div>
                <div className="progress-track">
                  <span style={{ transform: `scaleX(${completed / 3})` }} />
                </div>
                {chores.map((chore) => (
                  <button
                    key={chore.id}
                    className={`chore ${chore.done ? "chore-done" : ""}`}
                    aria-pressed={chore.done}
                    aria-label={`${chore.title}: ${chore.done ? "tamamlandı, geri al" : "tamamla"}`}
                    onClick={() =>
                      setChores(
                        chores.map((item) =>
                          item.id === chore.id
                            ? { ...item, done: !item.done }
                            : item,
                        ),
                      )
                    }
                  >
                    <span className="chore-check">
                      {chore.done && <Check size={12} />}
                    </span>
                    <span>{chore.title}</span>
                    <span className={`avatar ${chore.color}`}>
                      {chore.person}
                    </span>
                  </button>
                ))}
                <p className="app-progress-copy" aria-live="polite">
                  {completed === 3
                    ? "Hepsi tamam! Şimdi biraz keyif zamanı."
                    : "Küçük işler, birlikte daha kolay."}
                </p>
              </div>
              <div className="app-members">
                <span>
                  <strong>Evdeki ekibin</strong>
                  <small>Birlikte, her şey daha güzel.</small>
                </span>
                <div className="avatar-stack">
                  {members.map((member) => (
                    <span
                      key={member.name}
                      className={`avatar ${member.color}`}
                    >
                      {member.initial}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {tab === "crew" && (
            <div className="phone-panel crew-panel">
              <div className="app-section-title">
                <span>
                  <Users size={18} />
                  Ev arkadaşların
                </span>
                <small>3 kişi</small>
              </div>
              {members.map((member) => (
                <div className="member-row" key={member.name}>
                  <span className={`avatar ${member.color}`}>
                    {member.initial}
                  </span>
                  <span>
                    <strong>{member.name}</strong>
                    <small>{member.role}</small>
                  </span>
                  <span className="member-points">
                    <Trophy size={13} />
                    {member.points}
                  </span>
                </div>
              ))}
              <div className="invite-sample">
                <Home size={22} />
                <strong>Aynı çatı altında buluşun.</strong>
                <p>
                  Evini oluştur, davet kodunu paylaş ve ekibini bir araya getir.
                </p>
                <span>Örnek ev · Moda’daki evimiz</span>
              </div>
            </div>
          )}
          {tab === "games" && (
            <div className="phone-panel games-panel">
              <div className="app-section-title">
                <span>
                  <Gamepad2 size={18} />
                  Oyun odası
                </span>
                <small>Bir mola ver</small>
              </div>
              <div className="game-feature">
                <ArrowUpRight size={42} />
                <span>
                  <strong>House Rockets</strong>
                  <small>Ekiple rekabete hazır mısın?</small>
                </span>
              </div>
              <div className="mini-games">
                <div>
                  <Gamepad2 size={26} />
                  <strong>House Tanks</strong>
                  <small>Meydan okumaya var mısın?</small>
                </div>
                <div>
                  <Trophy size={26} />
                  <strong>Taş, kağıt, makas</strong>
                  <small>Küçük bir rekabet.</small>
                </div>
              </div>
              <p className="game-note">
                Oyunlar mobil uygulamada seni bekliyor.
              </p>
            </div>
          )}
        </div>
        <div className="phone-bottom-nav">
          {(
            [
              { id: "home", label: "Evim", icon: Home },
              { id: "crew", label: "Ekibim", icon: Users },
              { id: "games", label: "Oyunlar", icon: Gamepad2 },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-pressed={tab === item.id}
              className={tab === item.id ? "selected" : ""}
            >
              <item.icon size={19} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
}

export function FloatingNotes() {
  return (
    <>
      <div className="floating-note note-top">
        <span className="note-check">
          <Check size={19} />
        </span>
        <span>
          <strong>Bir iş daha tamam!</strong>
          <small>Ekip işi dediğin böyle olur.</small>
        </span>
      </div>
      <div className="floating-note note-bottom">
        <div className="avatar-stack">
          <span className="avatar peach">E</span>
          <span className="avatar sage">D</span>
          <span className="avatar lilac">C</span>
          <span className="avatar white">
            <Plus size={13} />
          </span>
        </div>
        <span>Bir ev. Bir ekip.</span>
      </div>
      <span className="orbit-symbol">
        <Bell size={22} />
      </span>
    </>
  );
}
