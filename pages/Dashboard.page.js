const BasePage = require('../core/page/BasePage');
const BaseElement = require('../core/elements/BaseElement');
const Logger = require('../core/logger/Logger');

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        
        const pageSelectors = this.selectors.dashboard || {};
        const welcomeSelector = pageSelectors.welcomeMessage || '.title';
        const logoutBtnSelector = pageSelectors.logoutButton || '#logout_sidebar_link';
        const menuBtnSelector = pageSelectors.menuButton || '#react-burger-menu-btn';

        this.welcomeMessage = new BaseElement(this.page, welcomeSelector, 'Welcome Message');
        this.menuButton = new BaseElement(this.page, menuBtnSelector, 'Menu Button');
        this.logoutButton = new BaseElement(this.page, logoutBtnSelector, 'Logout Button');
    }

    async isWelcomeMessageVisible() {
        return await this.welcomeMessage.isVisible();
    }

    async clickLogout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}

module.exports = DashboardPage;
