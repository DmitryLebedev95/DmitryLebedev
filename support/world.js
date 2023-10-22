const header = require('../pageObjects/header.js');
const authform = require('../pageObjects/authform.js');
const promo = require('../pageObjects/promo.js');
const profile = require('../pageObjects/profile.js');
const deposit = require('../pageObjects/deposit.js');

const pageObjects = {
    header: header,
    auth: authform,
    promo: promo,
    deposit: deposit,
    profile: profile
};

class World {
    constructor() {
        this.pageObjects = pageObjects;
        this.page = {
            url: 'https://roxcasino1532.com/'
        };
    }
}

module.exports = World;

