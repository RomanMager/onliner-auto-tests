/// <reference types="cypress"/>

const URL = 'https://catalog.onliner.by/tv';

const TV_NAME = '.schema-product__title';

export class TvsListPage {

    openSelectedTvPage(tvName) {
        cy.url().should('eq', URL);

        cy.contains(TV_NAME, tvName)
            .click();
    }

}

export const actionsOnTvsListPage = new TvsListPage();
