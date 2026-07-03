const Logger = require('../logger/Logger');

class BaseElement {
    constructor(page, selector, name) {
        this.page = page;
        this.selector = selector;
        this.name = name;
        this.locator = this.page.locator(this.selector);
    }

    async click() {
        Logger.info(`Clicking on ${this.name} element (${this.selector})`);
        await this.locator.click();
    }

    async fill(text) {
        Logger.info(`Filling '${text}' into ${this.name} element (${this.selector})`);
        await this.locator.fill(text);
    }

    async isVisible() {
        Logger.info(`Checking if ${this.name} element (${this.selector}) is visible`);
        return await this.locator.isVisible();
    }
    
    async getText() {
        Logger.info(`Getting text of ${this.name} element (${this.selector})`);
        return await this.locator.textContent();
    }
}

module.exports = BaseElement;
