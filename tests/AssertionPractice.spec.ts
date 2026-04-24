import { test, expect } from '@playwright/test';


//Go to Software Testing Practice website and verify the URL is correct
test('Go to Software Testing Practice website and verify the URL is correct', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL(/practicesoftwaretesting/);
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Thor Hammer');
});

