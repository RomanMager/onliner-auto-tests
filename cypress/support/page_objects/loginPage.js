/// <reference types="cypress"/>

// Locators
const FORM = 'form';
const EMAIL_INPUT = '[placeholder="Ник или e-mail"]';
const PASSWORD_INPUT = '[placeholder="Пароль"]';

export class LoginPage {

    typeEmail(email) {
        cy.get(FORM).find(EMAIL_INPUT).type(email);
    }

    typePassword(password) {
        cy.get(FORM).find(PASSWORD_INPUT).type(password);
    }

    clickLogInButton() {
        cy.contains('.auth-container', 'Вход').find(FORM).submit();
    }
}

export const actionsOnLoginPage = new LoginPage();
