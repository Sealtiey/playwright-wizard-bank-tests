import { test, expect } from '@playwright/test';

test('Assert correct customer Logout', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank link
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login 
  2. Click [Customer Login]
  3. Select Neville Longbottom
  4. Click [Login]
  5. Click [Logout]
  6. Wait for the page URL
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  7. Assert the drop-down is present with empty value 
  */
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button', { name: 'Customer Login'}).click();
    await page.locator('select').selectOption({ label: 'Neville Longbottom' });
    await page.getByRole('button', { name: 'Login'}).click();
    await page.getByRole('button', { name: 'Logout'}).click();
    await expect(page).toHaveURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
    await expect(page.getByTestId('userSelect')).toBeVisible();
    await expect(page.getByTestId('userSelect')).toHaveValue('');
  });
