const assert = require('assert');

describe(`Test homepage`, () => {
    it(`should get the correct page title`, () => {
        browser.url('http://beta.webdriver.io');
        const title = browser.getTitle();

        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});