/// <reference types="cypress"/>

import { actionsOnCatalogPage } from "../support/page_objects/catalogPage";
import { actionsOnMainPage } from "../support/page_objects/mainPage"

describe('Test navigation between pages', () => {

    it('Should navigate to the catalog page and verify url is correct', () => {
        actionsOnMainPage.visitMainPage();
        actionsOnMainPage.openCatalogPage();
        actionsOnCatalogPage.verifyUserInOnCatalogPage();
    })

})
