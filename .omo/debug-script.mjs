import { chromium } from "playwright";

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  console.log("Browser launched");
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  console.log("Navigating...");

  await page.goto("https://localhost:4322/academic", { waitUntil: "domcontentloaded" });
  console.log("Page loaded");

  const initial = await page.textContent("[data-featured-name]");
  console.log("Initial featured:", initial?.trim());

  console.log("Clicking Faris card...");
  await page.click('[data-person-id="faris"]');
  await page.waitForTimeout(500);

  const updated = await page.textContent("[data-featured-name]");
  console.log("Updated featured:", updated?.trim());

  await browser.close();
})();
