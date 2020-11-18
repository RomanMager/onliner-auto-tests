/// <reference types="cypress"/>

// Locators
const CATALOG_HEADER = '.catalog-navigation__title';

export class CatalogPage {
    
    /**
     * Verifications
     */
    verifyUserInOnCatalogPage() {
        cy.url()
            .should('eq', 'https://catalog.onliner.by/');
        
        cy.get(CATALOG_HEADER)
            .should('contain.text', 'Каталог');
    }
}

export const actionsOnCatalogPage = new CatalogPage();
