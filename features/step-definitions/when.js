
const {When} = require("cucumber");


const pageObjects = require('../../support/world.js');


When(/^Я нажимаю "([^"]*)" в "([^"]*)"$/, async (element, pageObjects) => {
    const selectedPageObject = pageObjects[pageObject];
    await selectedPageObject.clickElement(element);

});


When(/^Я скролю к "([^"]*)"$/, async (element) => {
    const targetElement = await $(element);

    await targetElement.scrollIntoView();


});

When(/^Я нажимаю "([^"]*)"$/, async (element, pageObject) => {
    const selectedPageObject = pageObjects[pageObject];
    await selectedPageObject.clickElement(element);

});

When(/^Я ввожу "([^"]*)" в "([^"]*)"$/, function () {

});


When(/^Я нажимаю "([^"]*)" на кассе$/, async (element, pageObject) => {
    const selectedPageObject = pageObjects[pageObject];
    await selectedPageObject.clickElement(element);
});


When(/^Я нажимаю "([^"]*)" на "([^"]*)"$/, async (element, pageObject) => {
    const selectedPageObject = pageObjects[pageObject];
    await selectedPageObject.clickElement(element);
});
When(/^Я навожу на "([^"]*)"$/, async (elementName) => {
    const selector = pageObjects.pageObjects.promo.elements[elementName]
    const element = await browser.$(selector);
    await element.moveTo();


});