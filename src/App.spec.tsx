import { test, expect } from '@playwright/experimental-ct-react';
import App from '../src/App';  // Adjust the import path according to your folder structure

test.use({ viewport: { width: 500, height: 500 } });

test('should display login form', async ({ mount }) => {
  const component = await mount(<App />);

  // Check if the email input field is displayed
  await expect(component.getByTestId('email')).toBeVisible();

  // Check if the password input field is displayed
  await expect(component.getByTestId('password')).toBeVisible();

  // Check if the sign-in button is displayed
  await expect(component.getByTestId('submit')).toBeVisible();

  // If you have specific text to check, use toContainText
  // await expect(component).toContainText('Sign in');
});
