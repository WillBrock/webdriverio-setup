describe(`Fetch element(s)`, () => {
    it(`should...`, () => {
        browser.url(`https://the-internet.herokuapp.com/`)

        const links = $$(`a`);

        links.forEach(link => console.log(link.getText()));
    });
});