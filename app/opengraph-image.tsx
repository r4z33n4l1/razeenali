import { createOgImage, ogAlt, ogSize } from "@/lib/og-image";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage();
}