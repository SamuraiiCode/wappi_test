import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../../userinterface/login";
import homePage from "../../../userinterface/homePage";
import myorders from "../../../userinterface/myorders";
import coupon from "../../../userinterface/coupon";



Given('I login in wappi web page', () => {
   
   cy.visit('https://automation-wappi.vercel.app/profile');
   login.elements.usernameInput();
   login.elements.passwordInput();
   login.elements.button();
   
})

Given('I get free coupon', () => {
    homePage.elements.FreeCoupon();
    
 })

When('I make an order with and without coupon', () => {
    homePage.elements.CouponProcess();
    homePage.elements.OrdersPage();
  

    
})

Then('I see the order in my orders', () => {
   myorders.elements.firstProductName();
   myorders.elements.firstProductCoupon();
   myorders.elements.secondProductName();
   myorders.elements.secondProductCoupon();
   myorders.elements.thirdProductName();
   myorders.elements.thirdProductCoupon();
})


When('I make an order with the same coupon', () => {

  homePage.elements.CouponProcessTwice();

    
})

Then('I see an error with the coupon', () => {
 coupon.elements.ErrorCoupon();
})

When('I make an order with unexisting coupon', () => {

    homePage.elements.CouponProcessUnexist();
  
      
  })
