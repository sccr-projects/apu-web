import { test, expect } from "@playwright/test";

test.use({ ignoreHTTPSErrors: true });

test("clicking lecturer card updates featured researcher", async ({ page }) => {
  await page.goto("https://localhost:4322/academic", { waitUntil: "networkidle" });

  const initialName = await page.textContent("[data-featured-name]");
  console.log("Initial featured:", initialName?.trim());

  // Click the first non-default lecturer card (Faris)
  const targetCard = page.locator('[data-person-id="faris"]').first();
  await targetCard.waitFor({ state: "visible" });
  await targetCard.click();

  await page.waitForTimeout(500);

  const updatedName = await page.textContent("[data-featured-name]");
  console.log("Updated featured:", updatedName?.trim());

  expect(updatedName?.trim()).toBe("Muhammad Faris, M.T.M.");
});
