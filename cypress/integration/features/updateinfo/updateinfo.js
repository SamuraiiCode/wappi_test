import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../../userinterface/login";
import homePage from "../../../userinterface/homePage";
import updateInfo from "../../../userinterface/updateInfo";





Given('I login in wappi web page', () => {
   
   cy.visit('https://automation-wappi.vercel.app/profile');
   login.elements.usernameInput();
   login.elements.passwordInput();
   login.elements.button();
   
})

Given('I click in informacion personal', () => {
    homePage.elements.UpdateInfo();
   
 })

When('I enter info', () => {
    updateInfo.elements.profilePicture();
    updateInfo.elements.profileName();
    updateInfo.elements.profileLastName();
    updateInfo.elements.profileDate();
    updateInfo.elements.profileCountry();
    updateInfo.elements.profileGender();
    updateInfo.elements.saveUpdate();
})

Then('i see the changes', () => {
   updateInfo.elements.updateMessage();
})