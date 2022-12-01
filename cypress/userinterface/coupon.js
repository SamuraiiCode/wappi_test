class Coupon {

    elements = {
        idCoupon: () => cy.xpath(`//tr[@id='coupon-0']//td[1]`),
        ErrorCoupon: () => cy.get('#e-coupon').should('be.visible')
        
    }

    
    
}
module.exports = new Coupon();