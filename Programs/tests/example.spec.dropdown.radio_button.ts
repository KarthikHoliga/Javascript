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
