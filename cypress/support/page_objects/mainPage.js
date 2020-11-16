/// <reference types="cypress"/>

class MainPage {

    navigate() {
        cy.visit('/');
    }

    openLoginPage() {
        cy.get('#userbar').then(userBar => {
            if (cy.wrap(userBar).contains('Вход')) {
                cy.wrap(userBar).click();
            }
        })
    }
    
}

export default MainPage;
