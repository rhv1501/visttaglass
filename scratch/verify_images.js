const fs = require('fs');
const path = require('path');

const servicesFile = path.join(__dirname, '../data/services.ts');
const publicDir = path.join(__dirname, '../public/images/services');

let content = fs.readFileSync(servicesFile, 'utf8');

const regex = /image:\s*"(.*?)"/g;
let match;
const expectedImages = new Set();

while ((match = regex.exec(content)) !== null) {
  expectedImages.add(match[1]);
}

let missingCount = 0;
let foundCount = 0;

console.log(`Checking ${expectedImages.size} image paths from data/services.ts...`);

for (const imagePath of Array.from(expectedImages)) {
  const absolutePath = path.join(__dirname, '..', 'public', imagePath);
  if (fs.existsSync(absolutePath)) {
    foundCount++;
  } else {
    missingCount++;
    console.log(`[MISSING] ${imagePath}`);
  }
}

console.log(`\nVerification Summary:`);
console.log(`✅ Found: ${foundCount}`);
console.log(`❌ Missing: ${missingCount}`);

if (missingCount === 0) {
  console.log(`🎉 ALL IMAGES ARE PERFECTLY IN PLACE!`);
} else {
  console.log(`⏳ The download script is still running. Please wait for it to finish.`);
}
