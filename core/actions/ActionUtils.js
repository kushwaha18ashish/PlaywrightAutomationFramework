const Logger = require('../logger/Logger');

class ActionUtils {
    constructor(page) {
        this.page = page;
    }

    async click(selector, options = {}) {
        Logger.info(`Clicking on element: ${selector}`);
        await this.page.click(selector, options);
    }

    async fill(selector, text, options = {}) {
        Logger.info(`Filling text '${text}' in element: ${selector}`);
        await this.page.fill(selector, text, options);
    }

    async type(selector, text, options = {}) {
        Logger.info(`Typing text '${text}' in element: ${selector}`);
        await this.page.type(selector, text, options);
    }

    async selectOption(selector, value, options = {}) {
        Logger.info(`Selecting option '${value}' in element: ${selector}`);
        await this.page.selectOption(selector, value, options);
    }

    async hover(selector, options = {}) {
        Logger.info(`Hovering over element: ${selector}`);
        await this.page.hover(selector, options);
    }
}

module.exports = ActionUtils;
