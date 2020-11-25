/// <reference types="cypress"/>

const URL = 'https://cart.onliner.by/order';

const CART_CHECKOUT_FORM_TITLE = '.cart-form__title';
const CART_CHECKOUT_FORM_CONTENT = '.cart-form__total-group';

export class CheckOutPage {

    verifyPage() {
        cy.url()
            .should('eq', URL);

        cy.get(CART_CHECKOUT_FORM_TITLE)
            .should('contain.text', 'Оформление заказа');
    }

    verifyOrderNameIsCorrect(orderName) {
        cy.get(CART_CHECKOUT_FORM_CONTENT)
            .should('contain.text', orderName);
    }
}

export const actionsOnCheckoutPage = new CheckOutPage();
