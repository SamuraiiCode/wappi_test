import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../../userinterface/login";
import homePage from "../../../userinterface/homePage";




Given('I open Wappi page', () => {
    cy.visit('https://automation-wappi.vercel.app/profile')
})

When('I type credentials', () => {
    login.elements.usernameInput();
    login.elements.passwordInput();
    login.elements.button();
})

And('I can click on get free coupon', () => {
    homePage.elements.FreeCoupon();
    ////This is for get a coupon /////
//  cy.get('#coupon-code').then($coupon =>{
//     const coupon = $coupon.text();
//     cy.log(coupon)
// })

cy.reload();
})



Then('i see profile', () => {
    homePage.elements.UserNameLogin();     
})









