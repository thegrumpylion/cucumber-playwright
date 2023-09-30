import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';

let page: Page;

Given('I am on the login page', async () => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:5173');
});

When('I enter my valid email and password', async () => {
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
});

Then('I should be logged in and see the dashboard', async () => {
  await page.waitForTimeout(2000); // Placeholder, adjust as needed
  console.log('Replace with actual assertion');
  await page.close();
});
