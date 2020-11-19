/// <reference types="cypress"/>

const SEARCH_BAR_INPUT = 'form.fast-search__form input[type="text"]';
const SEARCH_MODAL_WINDOW = '#fast-search-modal';
const SEARCH_RESULT_LIST = 'ul.search__results';
const SEARCH_RESULT_SINGLE_ITEM = 'li.search__result';
const SEARCHED_PRODUCT_TITLE = 'div.product__title a.product__title-link';

const getIframeDocument = (locator) => {
    return cy
        .get(locator)
        .find('iframe')
        .its('0.contentDocument').should('exist')
};

const getIframeBody = (locator) => {
    return getIframeDocument(locator)
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
};


export class SearchPage {

    typeSearchQuery(query) {
        cy.get(SEARCH_BAR_INPUT)
            .type(query, { force: true });
    }

    verifyResultsAreNotEmpty() {
        getIframeBody(SEARCH_MODAL_WINDOW)
            .find(SEARCH_RESULT_LIST)
            .children(SEARCH_RESULT_SINGLE_ITEM)
            .should('not.be.empty');
    }

    verifyResultsContainValidInformation(containString) {
        getIframeBody(SEARCH_MODAL_WINDOW)
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
