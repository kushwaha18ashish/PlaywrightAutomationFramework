const BasePage = require('../core/page/BasePage');
const BaseElement = require('../core/elements/BaseElement');
const Logger = require('../core/logger/Logger');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Define elements using selectors from environment configuration
        const pageSelectors = this.selectors.login || {};
        const usernameSelector = pageSelectors.usernameInput || '#username';
        const passwordSelector = pageSelectors.passwordInput || '#password';
        const loginBtnSelector = pageSelectors.loginButton || '#login-btn';
        const errorMessageSelector = pageSelectors.errorMessage || '.error-message';

        this.usernameInput = new BaseElement(this.page, usernameSelector, 'Username Input');
        this.passwordInput = new BaseElement(this.page, passwordSelector, 'Password Input');
        this.loginButton = new BaseElement(this.page, loginBtnSelector, 'Login Button');
        this.errorMessage = new BaseElement(this.page, errorMessageSelector, 'Error Message');
    }

    async open() {
        Logger.info('Opening Login Page');
        // Retrieve baseUrl from EnvironmentManager (assuming it's set in process.env.BASE_URL or via Env Manager instance)
        const EnvironmentManager = require('../config/EnvironmentManager');
        const baseUrl = EnvironmentManager.getBaseUrl();
        await this.navigateTo(`${baseUrl}/login`);
    }

    async enterCredentials(username, password) {
        Logger.info(`Entering credentials for user: ${username}`);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        Logger.info('Clicking login button');
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
