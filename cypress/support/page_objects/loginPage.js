/// <reference types="cypress"/>

class LoginPage {

    /*
    enterEmail() {
        
    }

    enterPassword() {

    }

    submitForm() {

    }
    */

    submitFormWithEmailAndPassword(email, password) {
        cy.contains('.auth-container', 'Вход')
            .find('form').then(form => {
                cy.wrap(form).find('[placeholder="Ник или e-mail"]').type(email);
                cy.wrap(form).find('[placeholder="Пароль"]').type(password);
                cy.wrap(form).submit();
            })
    }
}

export default LoginPage;
