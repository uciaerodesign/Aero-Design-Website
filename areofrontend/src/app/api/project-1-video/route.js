import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

const videoPath = path.join(
  "/Users",
  "rongzhiyuan",
  "Downloads",
  "linkedin-video.mp4"
);

export async function GET(request) {
  if (!existsSync(videoPath)) {
    return new Response("Project video not found.", { status: 404 });
  }

  const { size } = statSync(videoPath);
  const range = request.headers.get("range");

  if (range) {
    const [startValue, endValue] = range.replace("bytes=", "").split("-");
    const start = Number.parseInt(startValue, 10);
    const end = endValue ? Number.parseInt(endValue, 10) : size - 1;

    if (
      Number.isNaN(start) ||
      Number.isNaN(end) ||
      start < 0 ||
      end >= size ||
      start > end
    ) {
      return new Response("Requested range not satisfiable.", {
        status: 416,
        headers: {
          "Content-Range": `bytes */${size}`,
        },
      });
    }

    const stream = createReadStream(videoPath, { start, end });

    return new Response(ReadableStream.from(stream), {
      status: 206,
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=3600",
        "Content-Length": String(end - start + 1),
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Content-Type": "video/mp4",
      },
    });
  }

  const stream = createReadStream(videoPath);

  return new Response(ReadableStream.from(stream), {
    headers: {
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=3600",
      "Content-Length": String(size),
      "Content-Type": "video/mp4",
    },
  });
}
