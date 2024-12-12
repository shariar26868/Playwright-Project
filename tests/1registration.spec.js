import { test, expect } from '@playwright/test';
import Registration from '../pages/registration';

test('Registration is successful and user data is saved', async ({ page }) => {
  await page.goto('https://dailyfinance.roadtocareer.net');
  const reg = new Registration(page);
  await reg.navigateToRegister();
  await reg.fillFirstName();
  await reg.fillLastName();
  await reg.fillEmailAddress();
  await reg.fillPassword();
  await reg.fillPhoneNumber();
  await reg.fillAddress();
  await reg.selectGender();
  await reg.checkCheckbox();
  await reg.submitRegistration();
  await reg.saveUserData();

});
