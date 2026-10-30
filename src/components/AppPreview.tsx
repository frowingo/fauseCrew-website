import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  ArrowUpDown,
  BadgeCheck,
  BatteryFull,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleCheck,
  CircleUserRound,
  ClipboardList,
  Clock,
  Crosshair,
  Gamepad2,
  Hand,
  House,
  Megaphone,
  Rocket,
  RotateCw,
  Scissors,
  Search,
  Send,
  Signal,
  User,
  Users,
  Wifi,
} from "lucide-react";
import { useLang } from "../lib/i18n";
import {
  AmbientLines,
  FausHouseIcon,
  HeroGeometry,
  MeshTexture,
} from "./Brand";

/** A part of the dashboard the features section points at. */
export type PreviewFocus = "chores" | "announcements" | "games";

type ChoreStatus = "progress" | "review" | "completed";
/** `ChoreStatus.iconName`: arrow.right / magnifyingglass circles and the completed seal. */
const statusMeta: Record<
  ChoreStatus,
  { glyph: typeof Check; next: ChoreStatus }
> = {
  progress: { glyph: ArrowRight, next: "review" },
  review: { glyph: Search, next: "completed" },
  completed: { glyph: Check, next: "progress" },
};

/** Example housemates; avatars show `User.initials` like the app. */
const members = [
  { name: "Elif", initial: "E" },
  { name: "Ferdi", initial: "F" },
  { name: "Emre Can", initial: "EC" },
] as const;

/** Titles come from `content.preview.chores` by id. */
const initialChores: {
  id: 1 | 2 | 3;
  member: (typeof members)[number];
  status: ChoreStatus;
}[] = [
  { id: 1, member: members[0], status: "progress" },
  { id: 3, member: members[2], status: "review" },
  { id: 2, member: members[1], status: "completed" },
];

/** `MainScreenBackground` line strengths of Faus Dark. */
const darkLines = { apricot: 2.5, orange: 2.35, berry: 3.35 };

/** Names and blurbs live in `content.games.items`; `modes` are the ones the app has. */
export const games = [
  { id: "rockets", icon: Rocket, modes: ["bot", "online"] },
  { id: "tanks", icon: Crosshair, modes: ["bot", "online"] },
  { id: "switch", icon: ArrowUpDown },
  { id: "skyline", icon: Send },
  { id: "rps", icon: Hand, modes: ["bot"] },
  { id: "spin", icon: RotateCw },
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
    </span>
  );
}

/**
 * The app's main dashboard (`HouseDashboardView`) in iOS points, following the site theme
 * with Faus Light or Faus Dark. Only the Ev tab is live; Profil and Oyunlar stay in the app.
 */
export function AppPreview({
  focus,
  className,
}: {
  focus?: PreviewFocus;
  className?: string;
}) {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);
  const showToast = (message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  };
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  // Every focus target sits in the first screen, so the scroll returns to the top.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [focus]);

  return (
    <div
      className={`phone ${className ?? ""}`}
      role="group"
      aria-label={t.preview.label}
    >
      <div className="phone-viewport">
        <div className="app">
          <AppBackdrop />
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
          <div className="app-scroll" ref={scrollRef}>
            <Dashboard focus={focus} showToast={showToast} />
          </div>
          <TabBar focus={focus} />
          <span className="home-indicator" />
        </div>
      </div>
    </div>
  );
}

/** `MainScreenBackground`: base, dark mesh, wash, glow and the ambient line field. */
function AppBackdrop() {
  return (
    <span className="app-backdrop" aria-hidden="true">
      <span className="app-base" />
      <MeshTexture className="app-mesh" />
      <span className="app-wash" />
      <AmbientLines className="app-lines app-lines-light" />
      <AmbientLines
        className="app-lines app-lines-dark"
        strength={darkLines}
        boost={0.6}
      />
    </span>
  );
}

function TabBar({ focus }: { focus?: PreviewFocus }) {
  const { t } = useLang();
  return (
    <nav className="app-tabbar" aria-label={t.preview.tabsLabel}>
      <span className="tab-geometry" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <svg className="tab-gradient-defs" aria-hidden="true">
        <linearGradient id="faus-tab-icon-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffa04d" />
          <stop offset="1" stopColor="#ff6a2a" />
        </linearGradient>
      </svg>
      <span className="tab-item">
        <span className="tab-icon">
          <User size={19} />
        </span>
        {t.preview.tabs.profile}
      </span>
      <span className="tab-item tab-home" aria-current="page">
        <span className="tab-icon">
          <ChevronUp size={9} strokeWidth={3.5} />
          <House size={20} strokeWidth={2.4} />
        </span>
        {t.preview.tabs.home}
      </span>
      <span className={`tab-item ${focus === "games" ? "is-focused" : ""}`}>
        <span className="tab-icon">
          <Gamepad2 size={20} />
        </span>
        {t.preview.tabs.games}
      </span>
    </nav>
  );
}

function IconTile({
  icon: Icon,
  tone,
  badge,
}: {
  icon: typeof Users;
  tone: "announce" | "chores";
  badge?: number;
}) {
  return (
    <span className={`icon-tile tile-${tone}`}>
      <Icon size={20} strokeWidth={2.3} />
      <span className="tile-dot" />
      {badge ? <span className="tile-badge">{badge}</span> : null}
    </span>
  );
}

/** SF Symbols' filled status circles: a status-colored disc with the glyph cut out. */
function StatusGlyph({ status, size }: { status: ChoreStatus; size: number }) {
  const Glyph = statusMeta[status].glyph;
  return (
    <span
      className="status-glyph"
      style={{ "--glyph": `${size}px` } as CSSProperties}
    >
      <Glyph size={size * 0.56} strokeWidth={3.2} />
    </span>
  );
}

function Card({
  className,
  focused,
  children,
}: {
  className: string;
  focused?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`app-card ${className} ${focused ? "is-focused" : ""}`}>
      {children}
    </section>
  );
}

function Dashboard({
  focus,
  showToast,
}: {
  focus?: PreviewFocus;
  showToast: (message: string) => void;
}) {
  const { t } = useLang();
  const [chores, setChores] = useState(initialChores);
  const [announcementOpen, setAnnouncementOpen] = useState(false);
  const [read, setRead] = useState(false);
  const completed = chores.filter(
    (chore) => chore.status === "completed",
  ).length;
  const progress = completed / chores.length;
  // `TodaysChoresCard`: active chores first, then the history.
  const active = chores.filter((chore) => chore.status !== "completed");
  const history = chores.filter((chore) => chore.status === "completed");

  const advance = (id: number) => {
    const chore = chores.find((item) => item.id === id)!;
    const next = statusMeta[chore.status].next;
    if (next === "completed") showToast(t.preview.choreDone);
    setChores(
      chores.map((item) => (item.id === id ? { ...item, status: next } : item)),
    );
  };

  const choreRow = (chore: (typeof chores)[number]) => {
    const title = t.preview.chores[chore.id];
    const label = t.preview.status[chore.status];
    return (
      <button
        key={chore.id}
        className={`chore-row status-${chore.status}`}
        onClick={() => advance(chore.id)}
        aria-label={`${title}, ${chore.member.name}: ${label}. ${t.preview.advance}`}
      >
        <span className="chore-status-icon">
          {chore.status === "completed" ? (
            <span
              className="status-glyph is-done"
              style={{ "--glyph": "24px" } as CSSProperties}
            >
              <Check size={13} strokeWidth={3.4} />
            </span>
          ) : (
            <StatusGlyph status={chore.status} size={24} />
          )}
        </span>
        <span className="chore-body">
          <strong>{title}</strong>
          <span className="chore-meta">
            <span className="avatar">{chore.member.initial}</span>
            <span className="chore-person">{chore.member.name}</span>
            <span className="status-badge">
              {chore.status === "completed" ? (
                <BadgeCheck size={11} strokeWidth={2.6} />
              ) : (
                <StatusGlyph status={chore.status} size={10} />
              )}
              {label}
            </span>
          </span>
        </span>
        <span className="chore-chevron">
          <ChevronRight size={12} strokeWidth={3.2} />
        </span>
      </button>
    );
  };

  return (
    <div className="app-stack">
      <div className="app-hero">
        <HeroGeometry />
        <span className="house-thumb">
          <span>
            <FausHouseIcon size={32} />
          </span>
        </span>
        <span className="hero-text">
          <small>{t.preview.hello}</small>
          <strong>{t.preview.house}</strong>
        </span>
        <button
          className="hero-action"
          aria-label={t.preview.createAnnouncement}
          onClick={() => showToast(t.preview.announceInApp)}
        >
          <Megaphone size={20} />
        </button>
      </div>

      <Card
        className={`announcement-card ${announcementOpen ? "is-open" : ""}`}
        focused={focus === "announcements"}
      >
        <button
          className="card-header"
          onClick={() => setAnnouncementOpen(!announcementOpen)}
          aria-expanded={announcementOpen}
        >
          <IconTile icon={Megaphone} tone="announce" badge={read ? 0 : 1} />
          <span className="card-title">
            <strong>{t.preview.announcements}</strong>
            <small>{t.preview.activeCount}</small>
          </span>
          <span className="chevron-chip">
            <ChevronDown size={14} strokeWidth={3} />
          </span>
        </button>
        {announcementOpen && (
          <div className="announcement-body">
            <div className={`announcement-row ${read ? "is-read" : ""}`}>
              <strong>
                <span className="unread-dot" />
                {t.preview.movieTitle}
              </strong>
              <p>{t.preview.movieBody}</p>
              <div className="announcement-meta">
                <span>
                  <span>
                    <Clock size={11} /> {t.preview.movieTime}
                  </span>
                  <span className="publisher">
                    <CircleUserRound size={11} strokeWidth={2.6} />{" "}
                    {t.preview.publisher}
                  </span>
                </span>
                <button onClick={() => setRead(!read)} aria-pressed={read}>
                  {read ? (
                    <CircleCheck size={13} strokeWidth={2.6} />
                  ) : (
                    <Circle size={13} strokeWidth={2.6} />
                  )}
                  {read ? t.preview.read : t.preview.markRead}
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card className="chores-card inset" focused={focus === "chores"}>
        <div className="chores-header">
          <IconTile icon={ClipboardList} tone="chores" />
          <span className="card-title">
            <strong>{t.preview.todays}</strong>
            <small>{t.preview.completedOf(completed, chores.length)}</small>
          </span>
          <span
            className="progress-ring"
            style={{ "--progress": progress } as CSSProperties}
          >
            {t.preview.percent(Math.round(progress * 100))}
          </span>
        </div>
        <span className="progress-bar">
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
        <div className="chore-list">
          {active.map(choreRow)}
          {history.length > 0 && active.length > 0 && (
            <span className="chore-history">{t.preview.history}</span>
          )}
          {history.map(choreRow)}
        </div>
      </Card>
    </div>
  );
}

export function FloatingNotes() {
  const { t } = useLang();
  return (
    <>
      <div className="floating-note note-top">
        <span className="note-check">
          <CircleCheck size={20} />
        </span>
        <span>
          <strong>{t.preview.choreDone}</strong>
          <small>{t.preview.noteDone}</small>
        </span>
      </div>
      <div className="floating-note note-bottom">
        <span className="note-icon">
          <Megaphone size={17} />
        </span>
        <span>
          <strong>{t.preview.movieTitle}</strong>
          <small>{t.preview.noteAnnouncement}</small>
        </span>
      </div>
    </>
  );
}
