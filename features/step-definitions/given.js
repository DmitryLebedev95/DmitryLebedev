const { Given } = require('cucumber');
const World = require('../../support/world.js');
const world = new World();
const initializeBrowser = require('../../support/browserinit.js');

Given(/^Я нахожусь на главной странице$/, async function ()  {
    // this.timeout(10000);



    const browser = await initializeBrowser();
    await browser.setTimeout({ 'pageLoad': 10000 });
    await browser.url(world.page.url);
});




