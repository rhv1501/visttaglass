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

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadWithRetry(url, dest, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await downloadImage(url, dest);
      return; // Success
    } catch (err) {
      if (i === retries - 1) throw err; // Fail on last try
      await wait(2000); // Wait before retry
    }
  }
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

  console.log(`Found ${items.length} total items to process...`);

  const concurrencyLimit = 5;
  
  async function processItem(item) {
    const prompt = `practical accurate real-world product photography of ${item.title.replace(/&/g, 'and')}, clean studio catalog style, realistic engineering, photorealistic, 4k`;
    const fetchUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=2070&height=1380&nologo=true`;
    const destPath = path.join(publicDir, `${item.slug}.jpg`);

    try {
      await downloadWithRetry(fetchUrl, destPath);
      console.log(`[SUCCESS] Downloaded ${item.title}`);
    } catch (e) {
      console.error(`[ERROR] Failed ${item.title}:`, e.message);
    }
  }

  // Promise pool
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const item = items[index++];
      await processItem(item);
    }
  }

  const workers = Array.from({ length: concurrencyLimit }).map(() => worker());
  await Promise.all(workers);

  console.log('All accurate practical images generated!');
}

run();
