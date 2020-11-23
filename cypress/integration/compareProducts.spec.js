/// <reference types="cypress"/>

import { actionsOnMainPage } from "../support/page_objects/mainPage";
import { actionsOnCatalogPage } from "../support/page_objects/catalogPage";
import { actionsOnTvsListPage } from "../support/page_objects/tvsListPage";
import { actionsOnTvPage } from "../support/page_objects/tvPage";
import { actionsOnComparisonPage } from "../support/page_objects/comparisonPage";


const CATEGORY = 'Электроника';
const SUB_CATEGORY = 'Телевидение и видео';
const ITEM = 'Телевизоры';
const TV_NAME_1 = 'Xiaomi MI TV 4S 43';
const TV_NAME_2 = 'LG 55NANO916NA';

describe('Comparing products', () => {

    it('User can select multiple items and compare them', () => {
        actionsOnMainPage.visitMainPage();
        actionsOnMainPage.openCatalogPage();

        actionsOnCatalogPage.openCategoryPicker(CATEGORY);
        actionsOnCatalogPage.openCategoryPickerSubCategory(SUB_CATEGORY);
        actionsOnCatalogPage.openItemPage(ITEM);

        actionsOnTvsListPage.openSelectedTvPage(TV_NAME_1);
        actionsOnTvPage.verifyPage(TV_NAME_1);
        actionsOnTvPage.addToComparison();

        actionsOnTvPage.returnToTvListPage();

        actionsOnTvsListPage.openSelectedTvPage(TV_NAME_2);
        actionsOnTvPage.verifyPage(TV_NAME_2);
        actionsOnTvPage.addToComparison();

        actionsOnTvsListPage.openComparisonPage();
        actionsOnComparisonPage.verifyProductNames(TV_NAME_1, TV_NAME_2);
    })

})
