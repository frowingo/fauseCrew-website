import { config } from "../lib/config";
import { useLang } from "../lib/i18n";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.1 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.7-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.2 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.5ZM15 6.2c.6-.8 1.1-1.9 1-3-.9.1-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3Z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m4 3 11 9L4 21V3Z" fill="currentColor" />
      <path
        d="m6 2 11 7-2 2L6 2Zm11 11 4-2c1 .6 1 1.4 0 2l-4 2-2-2Zm-2 1 2 2-11 6 9-8Z"
        fill="currentColor"
        opacity=".7"
      />
    </svg>
  );
}
export function StoreLinks() {
  const { t } = useLang();
  return (
    <div className="store-links">
      {[
        { name: "App Store", url: config.appStoreUrl, icon: <AppleIcon /> },
        { name: "Google Play", url: config.playStoreUrl, icon: <PlayIcon /> },
      ].map((store) => {
        const content = (
          <>
            {store.icon}
            <span>
              <small>{store.url ? t.store.download : t.store.soon}</small>
              <strong>{store.name}</strong>
            </span>
            {!store.url && <span className="store-dot" />}
          </>
        );
        return store.url ? (
          <a
            className="store-link"
            key={store.name}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <div
            className="store-link unavailable"
            key={store.name}
            aria-label={`${store.name} — ${t.store.soonLabel}`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
