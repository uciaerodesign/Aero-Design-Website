import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const photoPath = path.join(
  "/Users",
  "rongzhiyuan",
  "Downloads",
  "Screenshot 2026-04-29 at 22.42.05_副本.jpeg"
);

export async function GET() {
  if (!existsSync(photoPath)) {
    return new Response("News photo not found.", { status: 404 });
  }

  const stream = createReadStream(photoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "image/jpeg",
    },
  });
}
