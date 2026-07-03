const { test } = require('@playwright/test');
const EnvironmentManager = require('../config/EnvironmentManager');
const LoginPage = require('../pages/Login.page.js');
const DashboardPage = require('../pages/Dashboard.page.js');
const Logger = require('../core/logger/Logger');

test.describe('Dashboard Feature', () => {
    let testData;

    test.beforeAll(async () => {
        testData = EnvironmentManager.getTestData();
    });

    test('User can logout from dashboard', async ({ page }) => {
        Logger.info('Starting test: Logout from dashboard');

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.open();

        const user = testData.validUser || { username: 'standard_user', password: 'secret_sauce' };
        await loginPage.enterCredentials(user.username, user.password);
        await loginPage.clickLogin();

        // Verify dashboard
        await dashboardPage.asserts.expectUrlToContain('/inventory.html');

        // Logout
        await dashboardPage.clickLogout();

        // Verify back to login
        await loginPage.asserts.expectElementVisible(loginPage.usernameInput.selector);

        Logger.info('Test passed successfully.');
    });
});
