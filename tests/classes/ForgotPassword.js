import Page from './Page';

class ForgotPassword extends Page {
    open() {
        super.open(`forgot_password`);

        return this;
    }

    get email() { return $(`[name="email"]`); }
    get submit() { return $(`#form_submit`); }
    get message() { return $(`#content`); }
}

export default new ForgotPassword();