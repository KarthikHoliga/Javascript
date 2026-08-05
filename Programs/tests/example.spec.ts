import { test, expect } from '@playwright/test';

test('launch example.com and screenshot', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  await expect(page).toHaveTitle(/Example Domain/);
});