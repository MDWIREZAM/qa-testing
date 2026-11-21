// Smoke test ringan, hanya membaca halaman publik. Tidak membuat akun, tidak mengirim form.
// Jalankan HANYA setelah ada izin pemilik.
// Install: npm install && npx playwright install
// Jalankan: npm test
const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'https://ayoostore.id';

test('AT-01 beranda termuat', async ({ page }) => {
  const res = await page.goto(BASE_URL);
  expect(res.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/.+/);
});

test('AT-02 waktu muat beranda wajar', async ({ page }) => {
  const start = Date.now();
  await page.goto(BASE_URL, { waitUntil: 'load' });
  const ms = Date.now() - start;
  console.log(`Waktu muat: ${ms} ms`);
  expect(ms).toBeLessThan(10000); // batas longgar; catat angka aslinya di laporan
});

test('AT-03 tata letak ponsel tanpa scroll horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  expect(overflow).toBeFalsy();
});

test('AT-04 tautan internal di beranda tidak rusak (maks 10, satu per satu)', async ({ page, request }) => {
  await page.goto(BASE_URL);
  const hrefs = await page.$$eval('a[href]', (as) =>
    [...new Set(as.map((a) => a.href))]
  );
  const internal = hrefs
    .filter((h) => h.startsWith(BASE_URL) && !h.includes('#'))
    .slice(0, 10);
  for (const url of internal) {
    const res = await request.get(url);
    expect(res.status(), `Tautan rusak: ${url}`).toBeLessThan(400);
    await page.waitForTimeout(1000); // jeda agar tidak membebani server
  }
});
