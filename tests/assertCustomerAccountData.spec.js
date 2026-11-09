import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select Hermoine Granger
  3. Click [Login]
  4. Assert Account Number in Dropdown next to the Hermoine Granger name
  5. Assert Account Number text
  5. Assert Balance text
  6. Assert Currency text
  */
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
    await page.locator('select').selectOption({ label: 'Hermoine Granger' });
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByTestId('accountSelect')).toHaveValue('number:1001');
    await expect(page.getByText('5096')).toHaveText('5096');
    await expect(page.getByText('Dollar')).toHaveText('Dollar');
    await expect(page.getByText('Account Number : 1001 ,')).toContainText('Account Number : 1001 ,');
  });
