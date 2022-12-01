class Coupon {

    elements = {
        idCoupon: () => cy.xpath(`//tr[@id='coupon-0']//td[1]`)
        
    }

    
    
}
module.exports = new Coupon();