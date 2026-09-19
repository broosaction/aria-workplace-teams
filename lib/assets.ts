export const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${assetBase}${normalized}`;
}
