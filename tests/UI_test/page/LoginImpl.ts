// LoginImpl.ts
import { Page } from '@playwright/test';
import { LoginObj } from '../pageObject/loginobj';
import { BasePage } from './BasePage';

export class LoginImpl extends BasePage {
  login: LoginObj;

  constructor(page: Page) {
    super(page);
    this.login = new LoginObj(); // Locators only
  }

  async loginApplication() {
    await this.page.goto('https://www.google.com/');
    await this.page.locator(this.login.username).fill('admin');
    await this.page.locator(this.login.password).fill('admin123');
    await this.page.locator(this.login.loginButton).click();
  }
}