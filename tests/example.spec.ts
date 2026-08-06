const { test, expect } = require('@playwright/test');

test('search DuckDuckGo for Playwright', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.getByRole('searchbox').fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/q=Playwright/);
});

test('verify page title on Wikipedia', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await expect(page).toHaveTitle(/Wikipedia/);
});

test('login form with valid and invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);
});

test('login fails with wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_pass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('select sorting dropdown', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.selectOption('[data-test="product-sort-container"]', 'lohi');
  const firstPrice = await page.locator('.inventory_item_price').first().innerText();
  expect(firstPrice).toBe('$7.99');
});

test('checkbox toggles state', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();
  await expect(checkbox).toBeChecked();
});

test('handle a JS alert', async ({ page }) => {
  page.on('dialog', dialog => dialog.accept());
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test('switch into an iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  const frame = page.frameLocator('#mce_0_ifr');
  await frame.locator('body').fill('Hello from Playwright');
  await expect(frame.locator('body')).toHaveText('Hello from Playwright');
});

test('handle a new tab opening', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click(),
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle(/New Window/);
});

test('wait for a delayed element to appear', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 });
});

test('table row count assertion', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  const rows = page.locator('#table1 tbody tr');
  await expect(rows).toHaveCount(4);
});
