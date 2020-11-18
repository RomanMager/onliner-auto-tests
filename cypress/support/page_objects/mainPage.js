/// <reference types="cypress"/>

// Locators
const USER_BAR = '#userbar';
const USER_AVATAR = '[class="b-top-profile__image js-header-user-avatar"]';
const TOP_MENU = '.b-top-menu';

const LOGIN_BUTTON_TEXT = 'Вход';
const CATALOG_TEXT = 'Каталог';

export class MainPage {

    /**
     * Navigation
     */
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

    openCatalogPage() {
        cy.get(TOP_MENU)
            .contains(CATALOG_TEXT)
            .click();
    }

    /**
     * Verifications
     */
    verifyUserIsLoggedIn() {
        cy.get(USER_BAR)
            .should('not.contain', LOGIN_BUTTON_TEXT);
    }
}

export const actionsOnMainPage = new MainPage();
