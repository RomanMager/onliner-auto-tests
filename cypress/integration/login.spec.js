/// <reference types="cypress"/>

import { default as LoginPage } from "../support/page_objects/loginPage";
import { default as MainPage } from "../support/page_objects/mainPage";

// TODO: Add meaningful description
describe('Test logging in', () => {

    const mainPage = new MainPage();
    const loginPage = new LoginPage();

    beforeEach('Navigate to the main page and open login window', () => {
        mainPage.navigate();
    })

    it('Should successfully login with email and password', () => {
        let email = Cypress.env('email');
        let password = Cypress.env('password');

        mainPage.openLoginPage();
        loginPage.submitFormWithEmailAndPassword(email, password);
    })
})
