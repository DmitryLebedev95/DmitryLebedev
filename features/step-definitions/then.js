const {Then} = require("cucumber");
const { browser } = require("webdriverio");

const pageObjects = require('../../support/world.js');


Then(/^Я вижу турнир "([^"]*)" в "([^"]*)"$/, async (selector) => {
    const isElementVisible = await browser.isExisting(selector);
    if (isElementVisible) {
        console.log(`Элемент с селектором "${selector}" существует на странице.`);
    } else {
        console.log(`Элемент с селектором "${selector}" не найден на странице.`);
    }
});

Then(/^Я вижу "([^"]*)" в "([^"]*)"$/, async (selector) => {
    const isElementVisible = await browser.isExisting(selector);
    if (isElementVisible) {
        console.log(`Элемент с селектором "${selector}" существует на странице.`);
    } else {
        console.log(`Элемент с селектором "${selector}" не найден на странице.`);
    }

});

Then(/^Я вижу кнопку "([^"]*)" в расписании "([^"]*)"$/, async (selector) => {
    const isElementVisible = await browser.isExisting(selector);
    if (isElementVisible) {
        console.log(`Элемент с селектором "${selector}" существует на странице.`);
    } else {
        console.log(`Элемент с селектором "${selector}" не найден на странице.`);
    }


});
Then(/^Я вижу блок "([^"]*)" в "([^"]*)"$/, function () {

});

Then(/^Я вижу "([^"]*)" и "([^"]*)" в "([^"]*)"$/, function () {

});

Then(/^Я вижу "([^"]*)" и "([^"]*)"$/, function () {

});

Then(/^Я вижу "([^"]*)" и "([^"]*)" в "([^"]*)"$/, function () {

});

Then(/^Я вижу "([^"]*)" у "([^"]*)"$/, function () {

});

Then(/^Я вижу стутус "([^"]*)" в "([^"]*)"$/, function () {

});