const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const path = require("path");
const fs = require("fs");

ffmpeg.setFfmpegPath(ffmpegPath);

const videoPath = path.join(__dirname, "public", "videos", "intro.mp4");
const outputDir = path.join(__dirname, "public", "videos", "frames");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("Starting frame extraction...");

ffmpeg(videoPath)
  .outputOptions([
    "-vf fps=15", // Extract at 15 fps to keep the number of frames reasonable
    "-qscale:v 2" // High quality JPEG
  ])
  .output(path.join(outputDir, "frame_%04d.jpg"))
  .on("end", () => {
    console.log("Frames extracted successfully!");
  })
  .on("error", (err) => {
    console.error("Error extracting frames:", err);
  })
  .run();
