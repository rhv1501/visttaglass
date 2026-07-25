const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../data/services.ts');
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  "1549488344-c102a0a2df33": "1600585154340-be6161a56a0c",
  "1594834749740-74b3f6960b71": "1618219908412-a29a1bb7b86e",
  "1574360743954-c7a6c2559f94": "1584622650111-993a426fbf0a",
  "1600566753086-00f18ef02ce4": "1599696848652-f0ff23bc911f",
  "1545083036-b179caebecab": "1497366811353-6870744d04b2",
  "1581452932906-e7e7a177ec73": "1496307653780-42ee777d4833",
  "1591825729269-caeb344f6f87": "1533090161767-e6ffed986c88",
  "1600607688969-a5bfcd64bd40": "1486406146926-c627a92ad1ab",
  "1628190776735-e6307fc11c1d": "1497366216548-37526070297c"
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.replace(new RegExp(bad, 'g'), good);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed all 404 Unsplash URLs in services.ts!");
