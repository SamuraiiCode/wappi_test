class HomePage {

    elements = {
        FreeCoupon:() => cy.get('#welcome-coupon').click(),
        UserNameLogin:() => cy.get('[class="username"]').should('have.text','Usuario: prueba1'),
        UpdateInfo: () => cy.get('[href="/profile"]').click(),
        Coupon: () => cy.get('[href="/coupons"]').click(),
        MainPage: () => cy.get('[href="/home"]').click(),
        OrdersPage: () => cy.get('[href="/orders"]').click(),
        CouponProcess: () => cy.get('#coupon-code').then($CuponProcesss =>{
            const idCoupon = $CuponProcesss.text();
            cy.reload();
            cy.get('[href="/home"]').click()
            cy.xpath('//tr[@id="offer-0"]//td[7]//button').click();
            cy.get('#coupon').type(idCoupon);
            cy.get('#order-confirm').click();
            cy.xpath('//div[@id="confirmation-modal"]//div//span').click();
            cy.xpath('//tr[@id="offer-1"]//td[7]//button').click();
            cy.get('#coupon').type(idCoupon);
            cy.get('#order-confirm').click();
            cy.xpath('//div[@id="confirmation-modal"]//div//span').click();
            cy.xpath('//tr[@id="offer-2"]//td[7]//button').click();
            cy.get('#order-confirm').click();
            cy.xpath('//div[@id="confirmation-modal"]//div//span').click();
        }),

        CouponProcessTwice: () => cy.get('#coupon-code').then($CuponProcesss =>{
            const idCoupon = $CuponProcesss.text();
            cy.reload();
            cy.get('[href="/home"]').click()
            cy.xpath('//tr[@id="offer-0"]//td[7]//button').click();
            cy.get('#coupon').type(idCoupon);
            cy.get('#order-confirm').click();
            cy.xpath('//div[@id="confirmation-modal"]//div//span').click();
            cy.xpath('//tr[@id="offer-1"]//td[7]//button').click();
            cy.get('#coupon').type(idCoupon);
            cy.get('#order-confirm').click();
            cy.xpath('//div[@id="confirmation-modal"]//div//span').click();
            cy.xpath('//tr[@id="offer-2"]//td[7]//button').click();
            cy.get('#coupon').type(idCoupon);
            cy.get('#order-confirm').click();
        }),
        CouponProcessUnexist: () => cy.get('#coupon-code').then($CuponProcesss =>{
            const idCoupon = $CuponProcesss.text();
            cy.reload();
            cy.get('[href="/home"]').click()
            cy.xpath('//tr[@id="offer-0"]//td[7]//button').click();
            cy.get('#coupon').type('3steCuP0nN03xisst3');
            cy.get('#order-confirm').click();
            
        })
    }
    
}
module.exports = new HomePage();




