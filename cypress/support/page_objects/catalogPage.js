/// <reference types="cypress"/>

const CATALOG_HEADER = '.catalog-navigation__title';
const CATALOG_CATEGORIES_NAVIGATION_BAR = 'ul.catalog-navigation-classifier';
const CATALOG_CATEGORIES_TITLES = 'span.catalog-navigation-classifier__item-title span';
const CATALOG_NAVIGATION = '.catalog-navigation-list';
const SUB_CATEGORIES_ASIDE_LIST = '.catalog-navigation-list__aside-list';
const SUB_CATEGORIES_TITLES = '.catalog-navigation-list__aside-item';
const PRODUCTS_TITLES = 'span.catalog-navigation-list__dropdown-title';

const URL = 'https://catalog.onliner.by/';

const deleteNonBreakingSpace = (string) => {
    string.text().trim().replace(/\u00a0/g, ' ');
    return cy.wrap(string);
}

export class CatalogPage {

    openCategoryPicker(categoryName) {
        cy.get(CATALOG_CATEGORIES_NAVIGATION_BAR)
            .find(CATALOG_CATEGORIES_TITLES)
            .filter(':visible')
            .each(title => {
                return deleteNonBreakingSpace(title);
            }).then(title => {
                cy.wrap(title).contains(categoryName).click();
            })
    }

    openCategoryPickerSubCategory(subCategoryName) {
        cy.get(CATALOG_NAVIGATION)
            .find(SUB_CATEGORIES_ASIDE_LIST)
            .filter(':visible')
            .find(SUB_CATEGORIES_TITLES)
            .each(title => {
                return deleteNonBreakingSpace(title);
            }).then(title => {
                cy.wrap(title).contains(subCategoryName).click();
            })
    }

    openItemPage(itemName) {
        cy.get(`${CATALOG_NAVIGATION}_opened`)
            .find(`${SUB_CATEGORIES_ASIDE_LIST}_active`)
            .find(PRODUCTS_TITLES)
            .each(title => {
                return deleteNonBreakingSpace(title);
            }).then(title => {
                cy.wrap(title).contains(itemName).click();
            })
    }

    /**
     * Verifications
     */
    verifyUserInOnCatalogPage() {
        cy.url()
            .should('eq', URL);

        cy.get(CATALOG_HEADER)
            .should('contain.text', 'Каталог');
    }
}

export const actionsOnCatalogPage = new CatalogPage();
