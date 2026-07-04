import { curlSummary } from "@/lib/data";

export async function GET() {
  return new Response(curlSummary, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}