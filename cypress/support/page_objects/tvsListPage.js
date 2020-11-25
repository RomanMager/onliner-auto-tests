/// <reference types="cypress"/>

const TV_NAME = '.schema-product__title';
const LINK_TO_COMPARISON_PAGE = '#compare-button-container .compare-button a[href]';

const URL = 'https://catalog.onliner.by/tv';

export class TvsListPage {

    openSelectedTvPage(tvName) {
        cy.url().should('eq', URL);

        cy.contains(TV_NAME, tvName)
            .click();
    }

    openComparisonPage() {
        cy.get(LINK_TO_COMPARISON_PAGE)
            .should('have.attr', 'href')
            .then(href => {
                cy.visit(href)
            })
    }
}

export const actionsOnTvsListPage = new TvsListPage();
