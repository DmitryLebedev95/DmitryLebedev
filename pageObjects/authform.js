const { browser } = require('webdriverio');

class authform {
    constructor() {
        this.elements = {
            'Поле Почта': this.emailField,
            'Поле Пароль': this.passField,
            Войти: this.enterButton
        }
    }


    get emailField() {
        return '[data-test="email_field"]';
    }

    get passField (){
        return '[data-test="passwd_field"]';
    }

    get enterButton () {
        return '[data-test="auth-form-btn"]';
    }
    async clickElement(elementName) {
        const elementSelector = this.elements[elementName];
        if (!elementSelector) {
            throw new Error(`Элемент "${elementName}" не найден в списке элементов.`);
        }


        await browser.click(elementSelector);
    }

}

module.exports = authform;
