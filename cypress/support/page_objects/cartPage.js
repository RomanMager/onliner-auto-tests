/// <reference types="cypress"/>

const URL = 'https://cart.onliner.by/';

const CART_TITLE = '.cart-form__title';
const PROCEED_ORDER_BUTTON = '.cart-form__offers';
const TRASH_BUTTON = 'a.cart-form__button_remove';

export class CartPage {

    verifyPage() {
        cy.url().should('eq', URL);

        cy.get(CART_TITLE)
            .should('contain.text', 'Корзина');
    }

    proceedToCheckOutPage() {
        cy.get(PROCEED_ORDER_BUTTON)
            .contains('Оформить заказ')
            .click();
    }

    removeAllItemsFromCart() {
        cy.get(TRASH_BUTTON)
            .each(trashButton => {
                cy.wrap(trashButton).click({ force: true });
            })
    }
}

export const actionsOnCartPage = new CartPage();
