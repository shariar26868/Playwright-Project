import { test, expect } from '@playwright/test';
import Item from '../pages/item';  

test('Add two items successfully', async ({ page }) => {
  await page.goto('https://dailyfinance.roadtocareer.net/user');
  const item = new Item(page);
  await item.addItem('Rice Bowl', '150', '2024-12-12', 'Nice food');
  await item.addItem('Burger', '120', '2024-12-12', 'Delicious');
  const itemList = await page.locator('text=Rice Bowl');  
  await expect(itemList).toBeVisible();  
  const itemList2 = await page.locator('text=Burger'); 
  await expect(itemList2).toBeVisible();  

});