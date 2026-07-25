const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.results ? parsed.results.map(r => r.id) : []);
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const queries = [
    "structural glass facade", "laminated glass building", "curved glass architecture",
    "double glazing window", "ceramic glass building", "painted glass wall",
    "stained glass window", "frosted glass partition", "carved texture glass",
    "fabric glass", "shattered glass art", "modern lacquered kitchen",
    "glass sculpture", "glass column", "printed glass building",
    "textured glass macro", "decorative mirror interior", "led mirror vanity",
    "automatic sliding door building", "glass kitchen cabinets", "office glass walls",
    "glass canopy entrance", "luxury shower enclosure", "curved glass stairs",
    "frameless glass balcony", "glass door office", "sliding glass doors modern",
    "aluminium kitchen cabinets", "sliding wardrobe", "aluminium glass partition",
    "telescopic glass door", "luxury sliding door", "bifold doors house",
    "modern aluminium windows", "black framed shower", "aluminium balcony railing",
    "louvered doors", "french windows interior", "pocket door modern"
  ];
  
  for (const q of queries) {
    try {
      const ids = await searchUnsplash(q);
      if (ids.length > 0) {
        console.log(`"${q}": "${ids[0]}",`);
      } else {
        console.log(`"${q}": "NOT_FOUND",`);
      }
      await new Promise(r => setTimeout(r, 500));
    } catch(e) {
      console.error("Failed for", q);
    }
  }
}
run();
