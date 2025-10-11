// Small helper to build API URLs safely at build-time/runtime.
// Falls back to a relative path when VITE_API_BASE_URL is not provided.
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

// Build an API URL safely. This function is idempotent: if `path` already
// includes the API base it will be returned as-is, otherwise the base and
// path will be joined without producing duplicate slashes.
export function apiUrl(path) {
  if (!path) return API_BASE || "";

  // ensure path starts with a slash
  let p = path.startsWith("/") ? path : "/" + path;

  const base = API_BASE ? (API_BASE.endsWith("/") ? API_BASE.slice(0, -1) : API_BASE) : "";

  // If path already starts with the full base (idempotent), return normalized path
  if (base && p.startsWith(base)) return p;

  if (!base) return p;

  return base + p;
}

export default apiUrl;
