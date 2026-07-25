const fs = require('fs');
const https = require('https');
const path = require('path');

const servicesFile = path.join(__dirname, '../data/services.ts');
const publicDir = path.join(__dirname, '../public/images/services');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let content = fs.readFileSync(servicesFile, 'utf8');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => reject(new Error(`Status: ${res.statusCode}`)));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const regex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?image:\s*"(https:\/\/images\.unsplash\.com[^"]+)"/g;
  let match;
  const updates = [];

  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    const title = match[2];
    const oldUrl = match[3];
    
    // Create a specific, high-quality prompt for Pollinations
    const prompt = `luxury modern architectural photography of ${title.replace(/&/g, 'and')}, highly detailed, photorealistic interior design, cinematic lighting, 8k`;
    const encodedPrompt = encodeURIComponent(prompt);
    const fetchUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=2070&height=1380&nologo=true`;
    
    const destPath = path.join(publicDir, `sub-${slug}.jpg`);
    const newUrl = `/images/services/sub-${slug}.jpg`;
    
    updates.push({ slug, title, oldUrl, newUrl, destPath, fetchUrl });
  }

  console.log(`Found ${updates.length} Unsplash images to replace.`);

  for (const update of updates) {
    console.log(`Generating image for: ${update.title}...`);
    try {
      await downloadImage(update.fetchUrl, update.destPath);
      console.log(`Downloaded to ${update.destPath}`);
      // Replace only this specific occurrence
      content = content.replace(update.oldUrl, update.newUrl);
    } catch (e) {
      console.error(`Failed to generate ${update.title}:`, e.message);
    }
  }

  fs.writeFileSync(servicesFile, content, 'utf8');
  console.log('All done! Updated data/services.ts');
}

run();
