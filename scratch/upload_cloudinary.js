const fs = require('fs');
const path = require('path');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Check if credentials exist
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("❌ ERROR: Missing Cloudinary credentials in .env file.");
  console.log("Please create a .env file with:");
  console.log("CLOUDINARY_CLOUD_NAME=your_cloud_name");
  console.log("CLOUDINARY_API_KEY=your_api_key");
  console.log("CLOUDINARY_API_SECRET=your_api_secret");
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const videosDir = path.join(__dirname, '../public/videos');
const outputMapFile = path.join(__dirname, 'cloudinary_map.json');

// Only upload videos used in the app to save time (we have 18 total active)
const videosToUpload = [
  "1758908431.MP4", "1759252963.MP4", "1762441292.MP4",
  "1762892977.MP4", "1763047876.MP4", "1763113473.MP4",
  "1763458182.MP4", "1763636051.MP4", "1768541285.MP4",
  "1769265586.MP4", "1775759119.MP4", "1776077384.MP4",
  "1776078035.MP4", "1776260450.MP4", "1776364727.MP4",
  "1781002276.MP4", "1781002325.MP4", "1781002409.MP4"
];

let uploadMap = {};
if (fs.existsSync(outputMapFile)) {
  uploadMap = JSON.parse(fs.readFileSync(outputMapFile, 'utf8'));
}

async function uploadVideos() {
  console.log("🚀 Starting Cloudinary Video Uploads...");
  
  for (const file of videosToUpload) {
    const filePath = path.join(videosDir, file);
    
    // Check if already uploaded
    if (uploadMap[`/videos/${file}`]) {
      console.log(`✅ Skipping ${file} (Already uploaded)`);
      continue;
    }

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Warning: ${file} not found locally!`);
      continue;
    }

    try {
      console.log(`📤 Uploading ${file} (This may take a minute based on file size)...`);
      
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: "video",
        folder: "vistta_glass", // organize them in a folder
        // Add eager transformation if you want compressed versions automatically
        // eager: [{ width: 1280, crop: "scale", q_auto: true, f_auto: true }]
      });

      console.log(`✨ Success: ${file} -> ${result.secure_url}`);
      
      // Save map after each successful upload so we don't lose progress if it crashes
      uploadMap[`/videos/${file}`] = result.secure_url;
      fs.writeFileSync(outputMapFile, JSON.stringify(uploadMap, null, 2));
      
    } catch (error) {
      console.error(`❌ Failed to upload ${file}:`, error.message || error);
    }
  }

  console.log("🎉 All uploads complete! Check scratch/cloudinary_map.json");
  console.log("Now we can inject these secure URLs directly into the codebase.");
}

uploadVideos();
