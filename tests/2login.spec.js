import { test, expect } from '@playwright/test';
import Login from '../pages/login';  

test('Login is successful and login data is saved', async ({ page }) => {
  await page.goto('https://dailyfinance.roadtocareer.net');  
  const login = new Login(page);
  await login.fillEmailAddress('shariarshaikat@azad');
  await login.fillPassword('Philips1234');
  await login.submitLogin();
  await login.saveLoginData();
});