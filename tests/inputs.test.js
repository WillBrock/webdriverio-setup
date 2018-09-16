import { expect } from 'chai';

describe(`Test inputs`, () => {
    it(`checkboxes`, () => {
        const checkbox_one = $(`[type="checkbox"]:nth-child(1)`);

        browser.url(`https://the-internet.herokuapp.com/checkboxes`);

        expect(checkbox_one.isSelected()).to.be.false;

        checkbox_one.click();

        expect(checkbox_one.isSelected()).to.be.true;

        checkbox_one.click();
    });

    it(`dropdowns`, () => {
        const dropdown = $(`#dropdown`);

        browser.url(`https://the-internet.herokuapp.com/dropdown`);

        dropdown.selectByVisibleText(`Option 2`);

        expect(dropdown.getValue()).to.equal(`2`);
    });

   it(`dropdowns`, () => {
        const username = $(`[name="username"]`);

        browser.url(`https://the-internet.herokuapp.com/login`);

        // Add values to an input, retaining the current value
        username.addValue(`foo`);

        expect(username.getValue()).to.equal(`foo`);

        username.addValue(`bar`);

        expect(username.getValue()).to.equal(`foobar`);

        // Set the value of an input, clearing out the existing value first
        username.setValue(`some new value`);

        expect(username.getValue()).to.equal(`some new value`);

        // Clear text input
        username.clearValue();

        expect(username.getValue()).to.be.empty;
    });
});