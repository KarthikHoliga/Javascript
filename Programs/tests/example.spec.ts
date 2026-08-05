// example.spec.js
const { test, expect } = require('@playwright/test');

test('homepage has title and get started link', async ({ page }) => {
  // 1. Go to a page
  await page.goto('https://playwright.dev/');

  // 2. Check the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Check that we landed on the installation page
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});