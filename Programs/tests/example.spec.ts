/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
import { test, expect } from '@playwright/test';

test('1. fill and submit a form', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.title')).toBeVisible();
});
//import { test, expect } from '@playwright/test';

test('2. intentional failure example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // This will fail — page title after login is "Swag Labs", not "Wrong Title"
  await expect(page).toHaveTitle('Wrong Title');
cc});

test('3. select sort option from dropdown', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.selectOption('.product_sort_container', 'lohi'); // Low to High
  const firstPrice = await page.locator('.inventory_item_price').first().textContent();
  console.log('First item price after sort:', firstPrice);
});
/*
test('login fails with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});

import { test, expect } from '@playwright/test';

test('intentional failure example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // This will fail — page title after login is "Swag Labs", not "Wrong Title"
  await expect(page).toHaveTitle('Wrong Title');
});
*/
import { chromium, Browser, Page, test } from "@playwright/test";
test("Verify the Browser commands", async ({}) => {
let browser: Browser = await chromium.launch({ channel: "chrome" });
let newPage: Page = await browser.newPage();
await newPage.goto("https://www.google.com");
console.log(await newPage.title());
console.log(newPage.url());
await newPage.goto("https://orangehrm.com/contact-sales");
console.log(await newPage.title());
console.log(newPage.url());
await newPage.goBack();
console.log(await newPage.title());
await newPage.goForward();
console.log(await newPage.title());
await newPage.close();
});