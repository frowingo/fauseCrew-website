export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#"
      aria-label="FausCrew ana sayfa"
    >
      <img src="/app-icon.svg" width="38" height="38" alt="" />
      <span>
        FausCrew<span className="brand-dot">.</span>
      </span>
    </a>
  );
}
