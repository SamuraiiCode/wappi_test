import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../../userinterface/login";
import homePage from "../../../userinterface/homePage";


Given('I open Wappi page', () => {
    cy.visit('https://automation-wappi.vercel.app/profile')
})

When('I type credentials', () => {
    login.elements.enterUsername();
    login.elements.enterPassword();
    login.elements.clickButton();
})

And('I can click on get free coupon', () => {
    homePage.elements.clickFreeCoupon();
    cy.reload();
})

Then('I see profile', () => {
    homePage.elements.correctUsernameLogged();
})