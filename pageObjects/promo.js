const {browser} = require("webdriverio");

class promo {
    constructor() {
        this.elements = {
            Статусы: this.statusButton,
            Турниры: this.tournamentsButton,
            Бонусы: this.bonusesButton,
            Лотереи: this.lotteryButton,
            Кэшбэк: this.cashBackButton,
            Новости: this.newsButton,
            Акции: this.promotionsButton
        }
    }

    get statusButton() {
        return '//a[@href=\'/status\' and text()=\'СТАТУСЫ\']\n';
    }

    get tournamentsButton (){
        return '//a[@href=\'/tournaments\' and text()=\'ТУРНИРЫ\']\n';
    }

    get bonusesButton () {
        return '//a[@href=\'/bonus\' and text()=\'БОНУСЫ\']\n';
    }

    get lotteryButton () {
        return '//a[@href=\'/lottery\' and text()=\'ЛОТЕРЕИ\']\n';
    }

    get cashBackButton () {
        return '//a[@href=\'/cashback\' and text()=\'КЭШБЭК\']\n';
    }

    get newsButton () {
        return '[data-test="news"]';
    }

    get promotionsButton () {
        return '//a[@href=\'/promotions\' and text()=\'АКЦИИ\']\n';
    }

    async clickElement(elementName) {
        const elementSelector = this.elements[elementName];
        if (!elementSelector) {
            throw new Error(`Элемент "${elementName}" не найден в списке элементов.`);
        }


        await browser.click(elementSelector);
    }


}

module.exports = promo;
