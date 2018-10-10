import Page from './Page';

class Login extends Page {
    open() {
        super.open(`login`);

        // If your page has some type of ajax loading you'll want to wait for that to go away here
        //$(`.ajax-loading-bar`).waitForExist(undefined, true);

        return this;
    }

    login(username, password) {
        this.username.addValue(username);
        this.password.addValue(password);
        this.submit.click();

        // Wait for other page to be fully loaded
        return this;
    }

    get username() { return $(`#username`); }
    get password() { return $(`#password`); }
    get submit() { return $(`[type="submit"]`); }
    get flash() { return $(`#flash`); }
}

export default new Login();