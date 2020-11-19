/// <reference types="cypress"/>

import { actionsOnMainPage } from "../support/page_objects/mainPage";
import { actionsOnSearchPage } from "../support/page_objects/searchPage";

describe('Test if user can search for a specific item', () => {

    beforeEach(() => {
        actionsOnMainPage.visitMainPage();
    })

    it('Search for a specific item and check if it has been shown', () => {
        const searchQuery = 'Lenovo ThinkPad T14';

        actionsOnSearchPage.typeSearchQuery(searchQuery);

        actionsOnSearchPage.verifyResultsAreNotEmpty();
        actionsOnSearchPage.verifyResultsContainValidInformation(searchQuery);
    })

})
