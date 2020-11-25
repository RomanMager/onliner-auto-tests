/// <reference types="cypress"/>

import 'cypress-iframe';

const SEARCH_BAR_INPUT = 'form.fast-search__form input[type="text"]';
const SEARCH_RESULT_LIST = 'ul.search__results';
const SEARCH_RESULT_SINGLE_ITEM = 'li.search__result';
const SEARCHED_PRODUCT_TITLE = 'div.product__title a.product__title-link';
const IFRAME_WINDOW = '.modal-iframe';

export class SearchPage {

    typeSearchQuery(query) {
        cy.get(SEARCH_BAR_INPUT)
            .type(query, { force: true });
    }

    verifyResultsAreNotEmpty() {
        cy.iframe(IFRAME_WINDOW)
            .find(SEARCH_RESULT_LIST)
            .children(SEARCH_RESULT_SINGLE_ITEM)
            .should('not.be.empty');
    }

    verifyResultsContainValidInformation(containString) {
        cy.iframe(IFRAME_WINDOW)
            .find(SEARCH_RESULT_LIST)
            .children(SEARCH_RESULT_SINGLE_ITEM)
            .each(product => {
                cy.wrap(product)
                    .find(SEARCHED_PRODUCT_TITLE)
                    .should('contain.text', containString);
            })
    }
}

export const actionsOnSearchPage = new SearchPage();
