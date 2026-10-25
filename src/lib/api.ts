import { config } from "./config";

// The marketing site does not call the API. Future features can use this small
// transport boundary once endpoints, authentication and CORS are configured.
export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  if (!config.apiBaseUrl)
    throw new Error("API bağlantısı henüz yapılandırılmadı.");
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("..")) {
    throw new Error("API yolu / ile başlamalı ve göreli kalmalıdır.");
  }
  const response = await fetch(
    `${config.apiBaseUrl.replace(/\/$/, "")}${path}`,
    {
      ...options,
      headers: {
        Accept: "application/json",
        ...Object.fromEntries(new Headers(options.headers)),
      },
    },
  );
  if (!response.ok)
    throw new Error(`İstek tamamlanamadı (${response.status}).`);
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
