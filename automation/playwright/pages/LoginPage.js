// Page Object for the OrangeHRM login page
// Maps to TC-LOGIN-001, TC-LOGIN-003 (see Test-Cases/OrangeHRM/Login/login-test-cases.md)

import { expect } from '@playwright/test';

export default class LoginPage {

  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Invalid credentials');
    this.dashboardHeader = page.getByText('Dashboard', { exact: true });
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}