const {browser} = require("webdriverio");

class deposit {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeButton
        }
    }


    get closeButton() {
        return '[data-test="deposit_close_cross"]';
    }

    async clickElement(elementName) {
        const elementSelector = this.elements[elementName];
        if (!elementSelector) {
            throw new Error(`Элемент "${elementName}" не найден в списке элементов.`);
        }


        await browser.click(elementSelector);
    }


}

module.exports = deposit;
