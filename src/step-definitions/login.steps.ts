import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
// import { expect } from '@playwright/test';

let page: Page;
let browser: Browser;  // Declare browser variable here

Given('I am on the login page', { timeout: 10 * 1000 }, async () => {
  browser = await chromium.launch();  // Assign the browser instance here
  page = await browser.newPage();
  await page.goto('http://localhost:5173');
});

When('I enter my valid email and password', async () => {
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
});

Then('I should be logged in and see the dashboard', async () => {
  // Replace this with an actual condition that verifies successful login,
  // such as checking for the presence of an element, or a URL redirect, etc.
  await page.waitForTimeout(2000);

  // Example of a URL check
  // const url = page.url();
  // expect(url).toContain('dashboard');

  await browser.close();  // Corrected this line to use the browser variable directly
});
