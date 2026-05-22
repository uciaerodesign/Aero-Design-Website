import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const photoPath = path.join(process.cwd(), "..", "media", "1760062152313.jpeg");

export async function GET() {
  if (!existsSync(photoPath)) {
    return new Response("Project photo not found.", { status: 404 });
  }

  const stream = createReadStream(photoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "image/jpeg",
    },
  });
}
