import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

// Automates: TC-LOGIN-001 (valid admin login), TC-LOGIN-003 (invalid password)
// TC-LOGIN-002 (employee login), TC-LOGIN-005 (password reset — currently failing, see BUG-001-LOGIN)


test.describe('Login - P0 smoke', () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('TC-LOGIN-001: Admin can log in with valid credentials', async ({ page }) => {
    await login.login('Admin', 'admin123');
    await expect(login.dashboardHeader).toBeVisible();
  });

  test('TC-LOGIN-003: Invalid password shows an error message', async ({ page }) => {
    await login.login('Admin', 'WrongPass');
    await expect(login.errorMessage).toBeVisible();
  });
});