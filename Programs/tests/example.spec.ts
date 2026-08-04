import { test, expect } from '@playwright/test';

test('launch a login page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.locator('#username')).toBeVisible();
});