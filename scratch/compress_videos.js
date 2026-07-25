const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const videosToCompress = [
  "1758908431.MP4", "1759252963.MP4", "1762441292.MP4",
  "1762892977.MP4", "1763047876.MP4", "1763113473.MP4",
  "1763458182.MP4", "1763636051.MP4", "1768541285.MP4",
  "1769265586.MP4", "1775759119.MP4", "1776077384.MP4",
  "1776078035.MP4", "1776260450.MP4", "1776364727.MP4",
  "1781002276.MP4", "1781002325.MP4", "1781002409.MP4"
];

for (const file of videosToCompress) {
  const inputPath = path.join(videosDir, file);
  if (!fs.existsSync(inputPath)) continue;

  const stats = fs.statSync(inputPath);
  const sizeMB = stats.size / (1024 * 1024);

  // If already under 15MB, skip
  if (sizeMB < 15) {
    console.log(`✅ Skipping ${file}, already small enough (${sizeMB.toFixed(2)} MB)`);
    continue;
  }

  console.log(`🎥 Compressing ${file} (Original Size: ${sizeMB.toFixed(2)} MB)...`);
  
  const tmpPath = path.join(videosDir, `temp_${file}`);
  
  try {
    // -an drops audio (not needed for bg videos)
    // -vcodec libx264 -crf 28 compresses heavily with minimal visual loss
    // -vf applies a safe scale: limits max height to 1080p, while FORCING both width and height to be even numbers (required by H264)
    const cmd = `ffmpeg -y -i "${inputPath}" -vcodec libx264 -crf 28 -preset fast -an -vf "scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2" "${tmpPath}"`;
    
    // We use stdio: 'inherit' so it prints the beautiful ffmpeg progress bar directly to your terminal!
    execSync(cmd, { stdio: 'inherit' }); 
    
    // Replace original
    fs.unlinkSync(inputPath);
    fs.renameSync(tmpPath, inputPath);
    
    const newStats = fs.statSync(inputPath);
    console.log(`\n✨ SUCCESS: ${file} reduced from ${sizeMB.toFixed(2)} MB to ${(newStats.size / (1024 * 1024)).toFixed(2)} MB!\n`);
  } catch(e) {
    console.error(`\n❌ Error compressing ${file}: ${e.message}\n`);
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  }
}
console.log("🎉 All compressions done! You can now safely commit them to GitHub.");
