const { test } = require('@playwright/test');
const EnvironmentManager = require('../config/EnvironmentManager');
const LoginPage = require('../pages/Login.page.js');
const DashboardPage = require('../pages/Dashboard.page.js');
const Logger = require('../core/logger/Logger');

test.describe('Login Feature', () => {
    let testData;

    test.beforeAll(async () => {
        testData = EnvironmentManager.getTestData();
    });

    test('Successful login with valid credentials', async ({ page }) => {
        Logger.info('Starting test: Successful login');
        
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        
        await loginPage.open();
        
        // Use default data if testData.json is empty
        const user = testData.validUser || { username: 'testuser', password: 'password123' };
        await loginPage.enterCredentials(user.username, user.password);
        await loginPage.clickLogin();

        // Business assertions
        await dashboardPage.asserts.expectUrlToContain('/dashboard');
        await dashboardPage.asserts.expectElementVisible(dashboardPage.welcomeMessage.selector);
        
        Logger.info('Test passed successfully.');
    });

    test('Failed login with invalid credentials', async ({ page }) => {
        Logger.info('Starting test: Failed login');
        
        const loginPage = new LoginPage(page);
        
        await loginPage.open();
        
        const user = testData.invalidUser || { username: 'baduser', password: 'badpassword' };
        await loginPage.enterCredentials(user.username, user.password);
        await loginPage.clickLogin();

        // Assert error message
        await loginPage.asserts.expectElementVisible(loginPage.errorMessage.selector);
        
        Logger.info('Test passed successfully.');
    });
});
