/* scripts/optimize-bg.js
 * Usage: npm run images:optimize
 * - Place the source image at: public/images/come-sutre.jpg
 * - This script produces responsive WebP assets used by the CSS
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images');
const src = path.join(outDir, 'come-sutre.jpg');

const sizes = [480, 780, 1280];

async function ensureOut() {
  await fs.promises.mkdir(outDir, { recursive: true });
}

async function run() {
  if (!fs.existsSync(src)) {
    console.error('\nERROR: source image not found: public/images/come-sutre.jpg');
    console.error('Drop the provided image into public/images/come-sutre.jpg and re-run npm run images:optimize\n');
    process.exit(2);
  }

  await ensureOut();

  // create a high-quality optimized JPEG copy (max 1600px wide)
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, 'come-sutre.jpg'));

  // create WebP responsive sizes
  await Promise.all(
    sizes.map((w) =>
      sharp(src)
        .resize({ width: w })
        .webp({ quality: 78 })
        .toFile(path.join(outDir, `come-sutre-${w}.webp`))
    )
  );

  // also create a baseline webp for browsers that prefer it
  await sharp(src).webp({ quality: 78 }).toFile(path.join(outDir, 'come-sutre.webp'));

  console.log('\n✅ Generated: come-sutre.webp, come-sutre-480.webp, come-sutre-780.webp, come-sutre-1280.webp and optimized come-sutre.jpg');
  console.log('👉 Run `git add public/images/* && git commit -m "chore: add optimized bg images"` to include them in the repo.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
