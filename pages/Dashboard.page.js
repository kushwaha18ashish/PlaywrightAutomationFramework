const BasePage = require('../core/page/BasePage');
const BaseElement = require('../core/elements/BaseElement');
const Logger = require('../core/logger/Logger');

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        
        const pageSelectors = this.selectors.dashboard || {};
        const welcomeSelector = pageSelectors.welcomeMessage || '#welcome-msg';
        const logoutBtnSelector = pageSelectors.logoutButton || '#logout-btn';

        this.welcomeMessage = new BaseElement(this.page, welcomeSelector, 'Welcome Message');
        this.logoutButton = new BaseElement(this.page, logoutBtnSelector, 'Logout Button');
    }

    async isWelcomeMessageVisible() {
        return await this.welcomeMessage.isVisible();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }
}

module.exports = DashboardPage;
