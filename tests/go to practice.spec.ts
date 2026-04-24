import { test, expect } from '@playwright/test';


//Go to Software Testing Practice website and verify the URL is correct
test('Go to Software Testing Practice website and verify the URL is correct', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL(/practicesoftwaretesting/);
});

//Navigate to contact page and verify the URL is correct
test('Navigate to contact page and verify the URL is correct', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-contact"]').click();
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/contact');
  await expect(page).toHaveURL(/contact/);
});


//Navigate to sign in page and verify the URL is correct
test('Navigate to sign in page and verify the URL is correct', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  await expect(page).toHaveURL(/practicesoftwaretesting\.com\/auth\/login\/?/);
});