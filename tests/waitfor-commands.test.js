import { expect } from 'chai';

describe(`waitFor* commands`, () => {
    it(`waitForDisplayed`, () => {
        browser.url(`https://the-internet.herokuapp.com/dynamic_loading/1`);

        $(`#start button`).click();

        $(`#finish`).waitForDisplayed();

        expect($(`#finish h4`).getText()).to.equal(`Hello World!`);
    });

    it(`waitForExist`, () => {
        browser.url(`https://the-internet.herokuapp.com/dynamic_loading/2`);
        $(`#start button`).click();

        $(`#finish`).getText();
    });

    it(`waitForExist`, () => {
        browser.url(`https://the-internet.herokuapp.com/dynamic_loading/2`);
        $(`#start button`).click();

        $(`#loading`).waitForDisplayed(undefined, true);

        const text = $(`#finish`).getText();
    });

    it(`waitForEnabled`, () => {
        const input = $(`#input-example input`);
        browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);

        $(`#input-example button`).click();

        input.waitForEnabled();

        input.addValue(`fooooo`);

        browser.pause(10000)
    })
});