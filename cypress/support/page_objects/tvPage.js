/// <reference types="cypress"/>

const TV_NAME = 'h1.catalog-masthead__title';
const OFFERS_ASIDE_MENU = '#shop-offers-container';
const ADD_TO_CART_BUTTON = 'a.button_orange';

const ADD_TO_COMPARISON_CHECKBOX = '#product-compare-control [type="checkbox"]';
export class TvPage {

    verifyPage(tvName) {
        cy.get(TV_NAME)
            .should('contain.text', tvName);
    }

    addTvToCart() {
        cy.get(OFFERS_ASIDE_MENU)
            .find(ADD_TO_CART_BUTTON)
            .first()
            .click();
    }

    verifyTvInCart() {
        cy.get(OFFERS_ASIDE_MENU)
            .find(ADD_TO_CART_BUTTON)
            .first()
            .should('contain.text', 'В корзине')
    }

    proceedToCartPage() {
        cy.contains(ADD_TO_CART_BUTTON, 'В корзине')
            .click()
    }

    addToComparison() {
        cy.get(ADD_TO_COMPARISON_CHECKBOX)
            .check({ force: true });
    }

    returnToTvListPage() {
        cy.go('back');
    }
}

export const actionsOnTvPage = new TvPage();
