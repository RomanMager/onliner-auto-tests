/// <reference types="cypress"/>

import { actionsOnCartPage } from "../support/page_objects/cartPage";
import { actionsOnCatalogPage } from "../support/page_objects/catalogPage";
import { actionsOnCheckoutPage } from "../support/page_objects/checkOutPage";
import { actionsOnLoginPage } from "../support/page_objects/loginPage";
import { actionsOnMainPage } from "../support/page_objects/mainPage";
import { actionsOnTvPage } from "../support/page_objects/tvPage";
import { actionsOnTvsListPage } from "../support/page_objects/tvsListPage";

const USER_EMAIL = Cypress.env('email');
const USER_PASSWORD = Cypress.env('password');

const CATEGORY = 'Электроника';
const SUB_CATEGORY = 'Телевидение и видео';
const ITEM = 'Телевизоры';
const TV_NAME = 'Xiaomi MI TV 4S 43';

describe('User can select item and proceed to check out page', () => {

    it('Logged in user can add item into basket and proceed to check out page', () => {
        actionsOnMainPage.visitMainPage();
        
        actionsOnMainPage.openLoginModal()
        actionsOnLoginPage.typeEmail(USER_EMAIL);
        actionsOnLoginPage.typePassword(USER_PASSWORD);
        actionsOnLoginPage.clickLogInButton();
        actionsOnMainPage.verifyUserIsLoggedIn();

        actionsOnMainPage.openCatalogPage();
        actionsOnCatalogPage.openCategoryPicker(CATEGORY);
        actionsOnCatalogPage.openCategoryPickerSubCategory(SUB_CATEGORY);
        actionsOnCatalogPage.openItemPage(ITEM);

        actionsOnTvsListPage.openSelectedTvPage(TV_NAME);

        actionsOnTvPage.verifyPage(TV_NAME);
        actionsOnTvPage.addTvToCart();
        actionsOnTvPage.verifyTvInCart();
        actionsOnTvPage.proceedToCartPage();

        actionsOnCartPage.verifyPage();
        actionsOnCartPage.proceedToCheckOutPage();

        actionsOnCheckoutPage.verifyPage();
        actionsOnCheckoutPage.verifyOrderNameIsCorrect(TV_NAME);
    })

    after('Remove TV from cart', () => {
        actionsOnMainPage.visitMainPage();
        actionsOnMainPage.openCartPage();
        actionsOnCartPage.removeAllItemsFromCart();
        actionsOnMainPage.visitMainPage();
        actionsOnMainPage.verifyUserCardIsEmpty();
    }) 
})
