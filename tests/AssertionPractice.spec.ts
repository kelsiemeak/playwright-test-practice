import { test, expect } from '@playwright/test';


//Go to Software Testing Practice website and verify the URL is correct
test.describe('Practice Assertions',() => {

test('Go to Software Testing Practice website and verify the URL is correct', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
  await expect(page).toHaveURL(/practicesoftwaretesting/);
});

test('Search for Thor Hammer and verify the search results', async ({page}) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.locator('[data-test="search-query"]')).toBeVisible();
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('Thor Hammer');
  await page.getByRole('button', { name: 'Search'}).click();
  await expect(page.locator('.card-title').filter({ hasText: 'Thor Hammer' })).toBeVisible();

});

test('Verify the quantity can be altered and added to basket', async ({page}) => {
const quantityInput = page.locator('[data-test="quantity"]');
  await page.goto('https://practicesoftwaretesting.com/product/01KQ33N0XVDZY6W4JCDEDFN2W2');
  await expect(quantityInput).toHaveValue('1');
  });
});
