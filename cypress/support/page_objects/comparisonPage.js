/// <reference types="cypress"/>

const PRODUCT_TABLE_HEADER = 'tbody.product-table__tbody';
const PRODUCT_NAME = 'span.product-summary__caption';

export class ComparisonPage {

    verifyProductNames(firstProductName, secondProductName) {
        cy.get(PRODUCT_TABLE_HEADER)
            .find(PRODUCT_NAME)
            .first()
            .should('include.text', firstProductName);

        cy.get(PRODUCT_TABLE_HEADER)
            .find(PRODUCT_NAME)
            .last()
            .should('include.text', secondProductName);
    }

}

export const actionsOnComparisonPage = new ComparisonPage();
