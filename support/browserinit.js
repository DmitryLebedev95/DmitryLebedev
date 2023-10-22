const { remote } = require('webdriverio');

const initializeBrowser = async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless', 'disable-gpu'] : []
            }
        }
    });
    return browser;
};

module.exports = initializeBrowser;

