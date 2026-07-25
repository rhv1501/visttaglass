const fs = require('fs');
const https = require('https');
const path = require('path');

const servicesFile = path.join(__dirname, '../data/services.ts');
const publicDir = path.join(__dirname, '../public/images/services');

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

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const regex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?image:\s*"(https:\/\/images\.unsplash\.com[^"]+)"/g;
  let match;
  const updates = [];

  while ((match = regex.exec(content)) !== null) {
    updates.push({ slug: match[1], title: match[2], oldUrl: match[3] });
  }

  console.log(`Found ${updates.length} Unsplash images remaining.`);

  for (const update of updates) {
    const prompt = `luxury modern architectural photography of ${update.title.replace(/&/g, 'and')}, highly detailed, photorealistic interior design, cinematic lighting, 8k`;
    const fetchUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=2070&height=1380&nologo=true`;
    const destPath = path.join(publicDir, `sub-${update.slug}.jpg`);
    const newUrl = `/images/services/sub-${update.slug}.jpg`;

    console.log(`Generating: ${update.title}...`);
    try {
      await downloadImage(fetchUrl, destPath);
      console.log(`[SUCCESS] Downloaded ${update.title}`);
      content = content.replace(update.oldUrl, newUrl);
      fs.writeFileSync(servicesFile, content, 'utf8'); // Save after each success
      await wait(3000); // 3 second delay to avoid 429
    } catch (e) {
      console.error(`[ERROR] Failed ${update.title}:`, e.message);
      await wait(5000); // Backoff on error
    }
  }

  console.log('All done!');
}

run();
