import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const teamPhotoPath = path.join(process.cwd(), "..", "media", "_DSC3406.JPG");

export async function GET() {
  if (!existsSync(teamPhotoPath)) {
    return new Response("Team photo not found.", { status: 404 });
  }

  const stream = createReadStream(teamPhotoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "image/jpeg",
    },
  });
}
