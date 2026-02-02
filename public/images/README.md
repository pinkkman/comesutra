Place the site background image(s) here and run the optimizer.

Expected filenames (used by CSS):
- come-sutre.jpg         (source / fallback)
- come-sutre.webp        (auto-generated)
- come-sutre-480.webp    (auto-generated)
- come-sutre-780.webp    (auto-generated)
- come-sutre-1280.webp   (auto-generated)

Quick steps:
1. Copy the attached image to `public/images/come-sutre.jpg`.
2. Run: `npm run images:optimize` (requires Node + dev dependency `sharp`).
3. Commit the generated images: `git add public/images/* && git commit -m "chore: add optimized bg images"`

If you prefer, you can directly add a pre-generated `come-sutre.webp` instead of running the script.