// steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I am on Playwright home page {string}', async ({ LoginImpl }, url: string) => {
  await LoginImpl.loginApplication();
});

When('I click link {string}', async ({ BasePage }, linkText: string) => {
  
});

Then('I see in title {string}', async ({ BasePage }, expectedTitle: string) => {
 
});