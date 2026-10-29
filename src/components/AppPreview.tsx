import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ArrowUpDown,
  BatteryFull,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleArrowRight,
  CircleCheck,
  CircleUserRound,
  ClipboardList,
  Clock,
  Copy,
  Crosshair,
  Gamepad2,
  Hand,
  House,
  Info,
  KeyRound,
  Languages,
  Megaphone,
  Plus,
  Rocket,
  RotateCw,
  ScanSearch,
  Scissors,
  Send,
  Signal,
  User,
  UserPlus,
  Users,
  Wifi,
} from "lucide-react";
import { AmbientLines, FausHouseIcon, HeroGeometry } from "./Brand";

/** Mirrors the app's `AppTab`: Profile · Home · Games. */
export type PreviewTab = "profile" | "home" | "games";

type ChoreStatus = "progress" | "review" | "completed";
const statusMeta: Record<
  ChoreStatus,
  { label: string; icon: typeof CircleCheck; next: ChoreStatus }
> = {
  progress: { label: "Devam ediyor", icon: CircleArrowRight, next: "review" },
  review: { label: "İncelemede", icon: ScanSearch, next: "completed" },
  completed: { label: "Tamamlandı", icon: CircleCheck, next: "progress" },
};

const members = [
  { name: "Elif", initial: "E", tint: "indigo" },
  { name: "Deniz", initial: "D", tint: "teal" },
  { name: "Can", initial: "C", tint: "purple" },
] as const;

const initialChores: {
  id: number;
  title: string;
  member: (typeof members)[number];
  status: ChoreStatus;
}[] = [
  { id: 1, title: "Mutfağı toparla", member: members[0], status: "progress" },
  { id: 2, title: "Bitkileri sula", member: members[1], status: "completed" },
  { id: 3, title: "Çöpü çıkar", member: members[2], status: "review" },
];

export const games = [
  {
    id: "rockets",
    title: "House Rockets",
    text: "Ekibinle roket düellosu.",
    badge: "Online",
    icon: Rocket,
  },
  {
    id: "tanks",
    title: "House Tanks",
    text: "Haritada tank savaşı.",
    badge: "Arena",
    icon: Crosshair,
  },
  {
    id: "switch",
    title: "House Switch",
    text: "Gece şehrinde refleks testi.",
    badge: "Refleks",
    icon: ArrowUpDown,
  },
  {
    id: "skyline",
    title: "Skyline Dash",
    text: "Çatıların üstünden süzül.",
    badge: "Arcade",
    icon: Send,
  },
  {
    id: "rps",
    title: "Taş, Kağıt, Makas",
    text: "Kim bulaşık yıkayacak?",
    badge: "Klasik",
    icon: Hand,
  },
  {
    id: "spin",
    title: "Lucky Spin",
    text: "Çarkı çevir, şansını dene.",
    badge: "Şans",
    icon: RotateCw,
  },
] as const;

export function GameCover({ id }: { id: (typeof games)[number]["id"] }) {
  const game = games.find((item) => item.id === id)!;
  return (
    <span className={`game-cover cover-${id}`} aria-hidden="true">
      <span className="cover-art" />
      {id === "rps" ? (
        <span className="cover-tokens">
          <span>●</span>
          <Hand size={18} />
          <Scissors size={18} />
        </span>
      ) : (
        <game.icon className="cover-icon" size={38} strokeWidth={1.8} />
      )}
      <span className="cover-badge">{game.badge}</span>
    </span>
  );
}

export function AppPreview({
  tab,
  onTabChange,
  className,
}: {
  tab: PreviewTab;
  onTabChange: (tab: PreviewTab) => void;
  className?: string;
}) {
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);
  const showToast = (message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  };
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  return (
    <div
      className={`phone ${className ?? ""}`}
      role="group"
      aria-label="FausCrew etkileşimli örnek ekranı"
    >
      <div className="phone-viewport">
        <div className="app">
          <AmbientLines className="app-lines" />
          <div className="app-status" aria-hidden="true">
            <span>9:41</span>
            <span className="dynamic-island" />
            <span>
              <Signal size={17} strokeWidth={2.6} />
              <Wifi size={17} strokeWidth={2.6} />
              <BatteryFull size={24} strokeWidth={1.8} />
            </span>
          </div>
          {toast && (
            <div className="app-toast" role="status">
              <CircleCheck size={18} />
              {toast}
            </div>
          )}
          <div className="app-scroll" key={tab}>
            {tab === "home" && <HomeScreen showToast={showToast} />}
            {tab === "profile" && <ProfileScreen showToast={showToast} />}
            {tab === "games" && <GamesScreen showToast={showToast} />}
          </div>
          <nav className="app-tabbar" aria-label="Örnek uygulama menüsü">
            <HeroGeometry />
            {(
              [
                { id: "profile", label: "Profil", icon: User },
                { id: "home", label: "Ev", icon: House },
                { id: "games", label: "Oyunlar", icon: Gamepad2 },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                aria-pressed={tab === item.id}
                className={`tab-item tab-${item.id}`}
              >
                <span className="tab-icon">
                  {item.id === "home" && (
                    <ChevronUp size={9} strokeWidth={3.5} />
                  )}
                  <item.icon size={20} strokeWidth={tab === item.id ? 2.5 : 2} />
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <span className="home-indicator" />
        </div>
      </div>
    </div>
  );
}

function HeroCard({ children }: { children: ReactNode }) {
  return (
    <div className="app-hero">
      <HeroGeometry />
      {children}
    </div>
  );
}

function IconTile({
  icon: Icon,
  tone,
  round = false,
  badge,
}: {
  icon: typeof Users;
  tone: string;
  round?: boolean;
  badge?: number;
}) {
  return (
    <span className={`icon-tile tile-${tone} ${round ? "tile-round" : ""}`}>
      <Icon size={20} strokeWidth={2.3} />
      <span className="tile-dot" />
      {badge ? <span className="tile-badge">{badge}</span> : null}
    </span>
  );
}

function HomeScreen({ showToast }: { showToast: (message: string) => void }) {
  const [chores, setChores] = useState(initialChores);
  const [announcementOpen, setAnnouncementOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [fabExpanded, setFabExpanded] = useState(false);
  const completed = chores.filter((chore) => chore.status === "completed").length;
  const progress = completed / chores.length;

  useEffect(() => {
    if (!fabExpanded) return;
    const timer = window.setTimeout(() => setFabExpanded(false), 3000);
    return () => window.clearTimeout(timer);
  }, [fabExpanded]);

  const advance = (id: number) => {
    const chore = chores.find((item) => item.id === id)!;
    const next = statusMeta[chore.status].next;
    if (next === "completed") showToast("Bir iş daha tamam!");
    setChores(
      chores.map((item) => (item.id === id ? { ...item, status: next } : item)),
    );
  };

  return (
    <>
      <div className="app-stack">
        <HeroCard>
          <span className="house-thumb">
            <FausHouseIcon size={32} />
          </span>
          <span className="hero-text">
            <small>Merhaba, Elif</small>
            <strong>Moda’daki evimiz</strong>
          </span>
          <button
            className="hero-action"
            aria-label="Örnek duyuru oluştur"
            onClick={() => showToast("Duyurular mobil uygulamada.")}
          >
            <Megaphone size={20} />
          </button>
        </HeroCard>

        <section
          className={`app-card announcement-card ${announcementOpen ? "is-open" : ""}`}
        >
          <button
            className="card-header"
            onClick={() => setAnnouncementOpen(!announcementOpen)}
            aria-expanded={announcementOpen}
          >
            <IconTile icon={Megaphone} tone="announce" badge={read ? 0 : 1} />
            <span className="card-title">
              <strong>Duyurular</strong>
              <small>{read ? "Tümünü okudun" : "1 okunmamış duyuru"}</small>
            </span>
            <span className="chevron-chip">
              <ChevronDown size={15} strokeWidth={3} />
            </span>
          </button>
          {announcementOpen && (
            <div className="announcement-body">
              <div className={`announcement-row ${read ? "is-read" : ""}`}>
                <strong>
                  <span className="unread-dot" />
                  Bu akşam film gecesi!
                </strong>
                <p>20.30’da salonda buluşalım. Filmi birlikte seçeriz!</p>
                <div className="announcement-meta">
                  <span>
                    <span>
                      <Clock size={12} /> 10 dk önce
                    </span>
                    <span className="publisher">
                      <CircleUserRound size={12} /> Deniz yayınladı
                    </span>
                  </span>
                  <button onClick={() => setRead(!read)} aria-pressed={read}>
                    <Check size={12} strokeWidth={3} />
                    {read ? "Okundu" : "Okundu say"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="app-card chores-card inset">
          <div className="chores-header">
            <IconTile icon={ClipboardList} tone="chores" round />
            <span className="card-title">
              <strong>Bugünün görevleri</strong>
              <small>
                {completed}/{chores.length} tamamlandı
              </small>
            </span>
            <span
              className="progress-ring"
              style={{ "--progress": progress } as CSSProperties}
            >
              %{Math.round(progress * 100)}
            </span>
          </div>
          <span className="progress-bar">
            <span style={{ transform: `scaleX(${progress})` }} />
          </span>
          <div className="chore-list">
            {chores.map((chore) => {
              const meta = statusMeta[chore.status];
              return (
                <button
                  key={chore.id}
                  className={`chore-row status-${chore.status}`}
                  onClick={() => advance(chore.id)}
                  aria-label={`${chore.title}, ${chore.member.name}: ${meta.label}. Durumu ilerlet.`}
                >
                  <span className="chore-status-icon">
                    <meta.icon size={22} strokeWidth={2.4} />
                  </span>
                  <span className="chore-body">
                    <strong>{chore.title}</strong>
                    <span className="chore-meta">
                      <span className={`avatar avatar-${chore.member.tint}`}>
                        {chore.member.initial}
                      </span>
                      <span className="chore-person">{chore.member.name}</span>
                      <span className="status-badge">
                        <meta.icon size={10} strokeWidth={3} />
                        {meta.label}
                      </span>
                    </span>
                  </span>
                  <span className="chore-chevron">
                    <ChevronRight size={13} strokeWidth={3} />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="app-card members-card inset">
          <div className="members-header">
            <IconTile icon={Users} tone="members" />
            <strong>Ev arkadaşları</strong>
            <span className="count-pill">
              <span />
              {members.length}
            </span>
          </div>
          <div className="member-tiles">
            {members.map((member) => (
              <div key={member.name} className={`member-tile tint-${member.tint}`}>
                <span className="member-ring">
                  <span className={`avatar avatar-${member.tint}`}>
                    {member.initial}
                  </span>
                  <span className="member-house">
                    <House size={8} strokeWidth={3.5} />
                  </span>
                </span>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <button
        className={`app-fab ${fabExpanded ? "is-expanded" : ""}`}
        onClick={() =>
          fabExpanded
            ? (setFabExpanded(false), showToast("Görev eklemek uygulamada."))
            : setFabExpanded(true)
        }
        aria-label="Yeni görev"
      >
        <Plus size={22} strokeWidth={2.6} />
        {fabExpanded && <span>Yeni görev</span>}
      </button>
    </>
  );
}

function ProfileScreen({ showToast }: { showToast: (message: string) => void }) {
  const [inviteCode, setInviteCode] = useState(false);
  return (
    <div className="app-stack profile-stack">
      <HeroCard>
        <span className="profile-avatar">
          <span>E</span>
        </span>
        <span className="hero-text">
          <strong>Elif</strong>
          <span className="hero-underline" />
        </span>
      </HeroCard>

      <section className="app-card inset house-info-card">
        <div className="members-header">
          <IconTile icon={House} tone="members" />
          <strong>Evlerim</strong>
        </div>
        <div className="house-row">
          <span className="house-thumb small">
            <FausHouseIcon size={22} />
          </span>
          <span className="card-title">
            <strong>Moda’daki evimiz</strong>
            <small>3 ev arkadaşı · Şu anki ev</small>
          </span>
          <span className="chore-chevron">
            <ChevronRight size={13} strokeWidth={3} />
          </span>
        </div>
        <div className="invite-section">
          <span className="invite-title">
            <UserPlus size={16} strokeWidth={2.4} />
            Ev arkadaşlarını davet et
          </span>
          {inviteCode ? (
            <div className="invite-code">
              <span>
                <strong>MODA-7K2Q</strong>
                <small>Örnek kod · 24 saat geçerli</small>
              </span>
              <button
                onClick={() => showToast("Örnek kod kopyalandı.")}
                aria-label="Örnek davet kodunu kopyala"
              >
                <Copy size={16} />
              </button>
            </div>
          ) : (
            <button className="invite-button" onClick={() => setInviteCode(true)}>
              <KeyRound size={17} />
              Davet kodu oluştur
            </button>
          )}
        </div>
      </section>

      <section className="app-card inset settings-card">
        {[
          { icon: Languages, label: "Dil", value: "Türkçe" },
          { icon: Info, label: "Hakkında", value: "" },
        ].map((row) => (
          <div className="settings-row" key={row.label}>
            <row.icon size={18} />
            <span>{row.label}</span>
            <small>{row.value}</small>
            <ChevronRight size={14} strokeWidth={2.6} />
          </div>
        ))}
      </section>
    </div>
  );
}

function GamesScreen({ showToast }: { showToast: (message: string) => void }) {
  return (
    <div className="app-stack games-stack">
      <HeroCard>
        <Gamepad2 className="hero-watermark" size={54} strokeWidth={2.2} />
        <span className="hero-text">
          <strong>Oyunlar</strong>
          <small>Ekibinle kısa bir mola ver.</small>
        </span>
      </HeroCard>
      <div className="game-grid">
        {games.map((game) => (
          <button
            key={game.id}
            className="game-card"
            onClick={() => showToast("Oyunlar mobil uygulamada seni bekliyor.")}
          >
            <GameCover id={game.id} />
            <span className="game-text">
              <strong>{game.title}</strong>
              <small>{game.text}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function FloatingNotes() {
  return (
    <>
      <div className="floating-note note-top">
        <span className="note-check">
          <CircleCheck size={20} />
        </span>
        <span>
          <strong>Bir iş daha tamam!</strong>
          <small>Bitkileri sula · Deniz</small>
        </span>
      </div>
      <div className="floating-note note-bottom">
        <span className="note-icon">
          <Megaphone size={17} />
        </span>
        <span>
          <strong>Bu akşam film gecesi!</strong>
          <small>Yeni duyuru · Deniz</small>
        </span>
      </div>
    </>
  );
}
