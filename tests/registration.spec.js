const { test, expect } = require('@playwright/test');

test('Registration form should work correctly', async ({ page }) => {
  // Apka index.html file ko serve karna hoga, 
  // agar aap local server run karte ho (like Live Server in VS Code)
  // tab URL kuch aisa hoga:
  await page.goto('http://127.0.0.1:5500/index.html'); 

  // Name field check
  await expect(page.locator('#name')).toBeVisible();

  // Email field check
  await expect(page.locator('#email')).toBeVisible();

  // Password field check
  await expect(page.locator('#password')).toBeVisible();

  // Gender radio buttons
  await expect(page.locator('#male')).toBeVisible();
  await expect(page.locator('#female')).toBeVisible();

  // Submit button
  await expect(page.locator('button[type="submit"]')).toBeVisible();

  // --- Bonus: Form fill & submit ---
  await page.fill('#name', 'Mitali');
  await page.fill('#email', 'mitali@example.com');
  await page.fill('#password', 'mypassword123');
  await page.check('#female');  // Female select
  await page.click('button[type="submit"]');
});
