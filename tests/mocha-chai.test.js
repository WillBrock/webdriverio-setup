import { expect } from 'chai';

describe(`Test homepage`, function() {
    before(() => {
        // Runs once before all tests
        // Sometimes can be good to open a website page here
        // Or could be used to setup the tests with an api call

        browser.url(`http://beta.webdriver.io`);
    });

    beforeEach(() => {
        // Runs before each (it) is executed
    });

    after(() => {
        // Runs once after all tests
    });

    afterEach(() => {
        // Run after each (it) is executed
    });

    it(`should get the correct page title`, () => {
        const title = browser.getTitle();

        expect(title).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');

        // This will fail
        expect($(`.projectTitle`).isDisplayed(), `project title is not displayed`).to.equal(false);
    });

    it(`get website test`, () => {
        const title = $(`.projectTitle`).getText();
        expect(title).to.equal(`WEBDRIVER I/O`);
    });
});