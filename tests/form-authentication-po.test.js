import { expect } from 'chai';
import Login from './classes/Login';
import ForgotPassword from './classes/ForgotPassword';

describe(`Login Form`, () => {
    it(`should not allow login with invalid username`, () => {
        Login.open();

        Login.username.addValue(`fooooooooo`);
        Login.password.addValue(`barrrrrr`);
        
        Login.submit.click();

        Login.flash.waitForDisplayed();

        const error = Login.flash.getText();

        expect(error).to.equal(`Your username is invalid!\n×`);
    });

    it(`should login`, () => {
        Login.open();

        Login.login(`tomsmith`, `SuperSecretPassword!`);
    });

    it(`should send forgot password link`, () => {
        ForgotPassword.open();

        ForgotPassword.email.addValue(`foobar`);

        ForgotPassword.submit.click();

        const message = ForgotPassword.message.getText();

        expect(message).to.equal(`Your e-mail's been sent!`);
    });
});