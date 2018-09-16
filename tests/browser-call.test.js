describe(`Execute asynchronous actions`, () => {
    it(`browser.execute success`, () => {
        browser.url(`https://the-internet.herokuapp.com/`);

        const output = browser.call(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`Some output from out api call`);
                }, 3000)
            });
        });

        console.log(output);
    });

    it(`browser.execute fail`, () => {
        browser.url(`https://the-internet.herokuapp.com/`);

        const output = fakeAxios();

        console.log(output);
    });

    it(`real world api call`, () => {
        browser.url(`https://the-internet.herokuapp.com/`);

        const users = browser.call(() => {
            //return axios.get(`/users`);
        });

        console.log(users);
    });
});

function fakeAxios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Some output from out api call`);
        }, 3000)
    });
}