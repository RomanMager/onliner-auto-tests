/// <reference types="cypress"/>

// Locators
const LOGIN_BUTTON_TEXT = 'Вход';
const USER_BAR = '#userbar';
const USER_AVATAR = '[class="b-top-profile__image js-header-user-avatar"]';

export class MainPage {

    visitMainPage() {
        cy.visit('/');
    }

    openLoginModal() {
        cy.get(USER_BAR)
            .contains(LOGIN_BUTTON_TEXT)
            .click();
    }

    openProfileModal() {
        cy.get(USER_BAR)
            .find(USER_AVATAR)
            .click();
    }

    verifyUserIsLoggedIn() {
        cy.get(USER_BAR)
            .should('not.contain', LOGIN_BUTTON_TEXT);
    }
}

export const actionsOnMainPage = new MainPage();
