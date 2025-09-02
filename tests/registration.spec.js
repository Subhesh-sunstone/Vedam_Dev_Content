const { test, expect } = require('@playwright/test');

test('Registration form should have all fields', async ({ page }) => {
  // Apka index.html load karo (agar locally run ho raha hai to file path use karega)
  await page.goto('http://127.0.0.1:5500/index.html'); // is URL ko apne setup ke hisaab se badalna pad sakta hai

  // Check inputs
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();

  // Check gender radio buttons
  await expect(page.locator('input[type="radio"][value="male"]')).toBeVisible();
  await expect(page.locator('input[type="radio"][value="female"]')).toBeVisible();

  // Check submit button
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});
