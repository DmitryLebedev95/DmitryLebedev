class profile {
    constructor() {
        this.elements = {
            Подтвержден: this.emailStatus,
            New: this.userStatus,
            'Почта пользователя': this.userEmailField,
            'Статус пользователя': this.userStatusField
        }
    }


    get emailStatus() {
        return '//span[@class=\'confirme\']\n';
    }

    get userStatus (){
        return '//span[@class=\'statuseName\']\n';
    }

    get userEmailField () {
        return '//input[@placeholder=\'Почта\']\n';
    }

    get userStatusField () {
        return '(//div[@data-template=\'profile/status\'])[1]\n';
    }

    async  isExisting(selector) {
        const elements = await browser.$$(selector);
        return elements.length > 0;
    }



}
module.exports = profile;
