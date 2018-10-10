describe(`waitUntil`, () => {
    it(`should wait for checkbox to be removed`, () => {
        browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);

        $(`#checkbox-example button`).click();

        browser.waitUntil(() => {
            return !$(`#checkbox`).isExisting();
        });

    });

    it(`should wait for text to equal foo`, () => {
        browser.url(`https://the-internet.herokuapp.com`);

        // This should fail
        browser.waitUntil(() => {
            return $(`.heading`).getText() === `foo`;
        }, 5000, `Get text foo did not exist`, 1000);
    });
});