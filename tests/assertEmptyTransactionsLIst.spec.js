import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({
  page,
}) => {
  /* 
  Test:
  1. Open Wizard bank login for Customer using link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select "Albus Dumbledore"
  3. Click [Login]
  4. Click [Transactions]
  5. Assert first column header conatins text "Date-Time"
  6. Assert second column header conatins text "Amount"
  7. Assert first column header conatins text "Transaction Type"
  8. Assert the first row in table is hidden
  */
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
    await page.locator('select').selectOption({ label: 'Albus Dumbledore'});
    await page.getByRole('button', { name: 'Login'}).click();
    await page.getByRole('button', { name: 'Transactions'}).click();
    await expect(page.getByText('Date-Time', { exact: true })).toBeVisible();
    await expect(page.getByText('Amount', { exact: true })).toBeVisible();
    await expect(page.getByText('Transaction Type', { exact: true })).toBeVisible();
    await expect(page.getByRole('row').nth(1)).toBeHidden();
});
