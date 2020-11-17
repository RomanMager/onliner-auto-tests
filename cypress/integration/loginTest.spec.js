/// <reference types="cypress"/>

import { actionsOnLoginPage } from "../support/page_objects/loginPage";
import { actionsOnMainPage } from "../support/page_objects/mainPage";

const USER_EMAIL = Cypress.env('email');
const USER_PASSWORD = Cypress.env('password');

describe('Test logging in', () => {
    
    it('Logging in with valid credentials', () => {
        actionsOnMainPage.visitMainPage();
        actionsOnMainPage.openLoginModal();
        actionsOnLoginPage.typeEmail(USER_EMAIL);
        actionsOnLoginPage.typePassword(USER_PASSWORD);
        actionsOnLoginPage.clickLogInButton();
    })

    it('Verify user is successfully logged in', () => {
        actionsOnMainPage.verifyUserIsLoggedIn();
    })
})
