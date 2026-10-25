export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#"
      aria-label="FauseCrew ana sayfa"
    >
      <img src="/app-icon.svg" width="38" height="38" alt="" />
      <span>
        FauseCrew<span className="brand-dot">.</span>
      </span>
    </a>
  );
}
