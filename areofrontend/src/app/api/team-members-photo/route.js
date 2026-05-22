import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const teamMembersPhotoPath = path.join(
  process.cwd(),
  "..",
  "media",
  "1773036533662.jpeg"
);

export async function GET() {
  if (!existsSync(teamMembersPhotoPath)) {
    return new Response("Team members photo not found.", { status: 404 });
  }

  const stream = createReadStream(teamMembersPhotoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "image/jpeg",
    },
  });
}
