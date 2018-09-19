describe(`Custom Command`, () => {
    it(`should test a new command`, () => {
        browser.url(`https://the-internet.herokuapp.com/`);

        const data = browser.foobar(`some custom text`);
        const request = browser.makeRequest(`/users`);

        console.log(data);
        console.log(request);
    });
});