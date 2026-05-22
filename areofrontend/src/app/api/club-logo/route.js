import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const logoPath = path.join(
  process.cwd(),
  "..",
  "media",
  "aerodesignuci_logo.jpeg"
);

export async function GET() {
  if (!existsSync(logoPath)) {
    return new Response("Logo not found.", { status: 404 });
  }

  const stream = createReadStream(logoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "image/jpeg",
    },
  });
}
