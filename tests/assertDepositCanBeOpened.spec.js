import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the deposit can be opened', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank login for Customer using link
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select "Harry Potter"
  3. Click [Login]
  4. Click [Deposit]
  5. Fill deposit value
  6. Click [Deposit]
  7. Assert 'Deposit Successful' message is visible
  8. Assert Balance
  9. Click [Transactions]
  10. Assert table heder is visible
  11. Reload the page
  12. Assert amount cell in First Row contains the required amount
  13. Assert transaction type cell in First Row contains the required type

  Tips:
  1. Use faker to generate random value for deposit:
  - Import faker using command "import { faker } from '@faker-js/faker';"
  - Generate random amount using below. Then use the "amount" in the test.  
    const amount = faker.number.int(100).toString();
  */
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
    await page.locator('select').selectOption({ label: 'Harry Potter'});
    await page.getByRole('button', { name: 'Login'}).click();
    await page.getByRole('button', { name: 'Deposit'}).click();
    const amount = faker.number.int(100).toString();
    await page.getByPlaceholder('amount').fill(amount);
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();    
    await expect(page.getByText('Deposit Successful')).toBeVisible();
    await expect(page.locator('.center').first()).toContainText(`Balance : ${amount}`);    
    await page.getByRole('button', { name: 'Transactions' }).click();
    await expect(page.getByText('Amount', { exact: true })).toBeVisible();    
    await page.reload();
    await expect(page.getByRole('cell', { name: amount })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Credit' })).toBeVisible();
  });
