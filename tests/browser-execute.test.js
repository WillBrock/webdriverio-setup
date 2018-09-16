describe(`Execute client side javascript`, () => {
    it(`browser.execute`, () => {
        browser.url(`https://the-internet.herokuapp.com/`);

        const foo = `willyb`;

        const output = browser.execute((some_param) => {
            document.querySelector(`.heading`).textContent = some_param;

            return `foobar`;
        }, foo);

        console.log(output);
    });
});