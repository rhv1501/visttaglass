const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1549488344-c102a0a2df33?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594834749740-74b3f6960b71?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574360743954-c7a6c2559f94?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18ef02ce4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581452932906-e7e7a177ec73?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591825729269-caeb344f6f87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1628190776735-e6307fc11c1d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 400) {
        console.log(`[INVALID] ${res.statusCode}: ${url}`);
      } else {
        console.log(`[VALID] ${res.statusCode}: ${url}`);
      }
      resolve();
    }).on('error', (e) => {
      console.log(`[ERROR] ${e.message}: ${url}`);
      resolve();
    });
  });
}

async function run() {
  for (const url of urls) {
    await checkUrl(url);
  }
}

run();
