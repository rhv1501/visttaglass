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
  const regex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"/g;
  let match;
  const items = [];

  items.push({ slug: 'cat-architectural-glass', title: 'Commercial Architectural Glass Facades' });
  items.push({ slug: 'cat-decorative-glass', title: 'Decorative Interior Glass Art' });
  items.push({ slug: 'cat-glass-services', title: 'Automatic Glass Doors and Entrances' });
  items.push({ slug: 'cat-aluminium-systems', title: 'Premium Aluminium Sliding Systems' });

  while ((match = regex.exec(content)) !== null) {
    items.push({ slug: `sub-${match[1]}`, title: match[2] });
  }

  let missing = 0;

  for (const item of items) {
    const destPath = path.join(publicDir, `${item.slug}.jpg`);
    
    // Skip if it already exists!
    if (fs.existsSync(destPath)) {
      continue;
    }
    
    missing++;
    const prompt = `practical accurate real-world product photography of ${item.title.replace(/&/g, 'and')}, clean studio catalog style, realistic engineering, photorealistic, 4k`;
    const fetchUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=2070&height=1380&nologo=true`;

    console.log(`Generating missing: ${item.title}...`);
    
    let success = false;
    while (!success) {
      try {
        await downloadImage(fetchUrl, destPath);
        console.log(`[SUCCESS] Downloaded ${item.title}`);
        success = true;
        await wait(3000); // Wait 3 seconds to respect API
      } catch (e) {
        console.error(`[ERROR] Failed ${item.title} (${e.message}). Retrying in 5 seconds...`);
        await wait(5000); // Wait 5 seconds on 429 Too Many Requests
      }
    }
  }

  if (missing === 0) {
    console.log('All 43 accurate practical images are already downloaded and present!');
  } else {
    console.log(`Finished downloading the remaining ${missing} images!`);
  }
}

run();
