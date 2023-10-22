const {browser} = require("webdriverio");

class header {
    constructor() {
        this.elements = {
            Профиль: this.profileButton,
            Войти: this.signIn
        }
    }


    get profileButton() {
        return '[data-test="main_profile_login_name"]';
    }

    get signIn (){
        return '[data-test="main_signin"]';
    }

    async clickElement(elementName) {
        const elementSelector = this.elements[elementName];
        if (!elementSelector) {
            throw new Error(`Элемент "${elementName}" не найден в списке элементов.`);
        }


        await browser.click(elementSelector);
    }

}

module.exports = header;
