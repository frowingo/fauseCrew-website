function httpsUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export const config = {
  apiBaseUrl: httpsUrl(import.meta.env.VITE_API_BASE_URL),
  appStoreUrl: httpsUrl(import.meta.env.VITE_APP_STORE_URL),
  playStoreUrl: httpsUrl(import.meta.env.VITE_PLAY_STORE_URL),
};
