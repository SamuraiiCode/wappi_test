class MyOrders {

    elements = {
        firstProductName: () => cy.xpath(`//tr[@id="order-0"]//td[contains(text(),'Aceite de Girasol')]`).should('have.text','Aceite de Girasol'),
        firstProductCoupon: () => cy.xpath(`//tr[@id="order-0"]//td[contains(text(),'Si')]`).should('have.text','Si'),
        secondProductName: () => cy.xpath(`//tr[@id="order-1"]//td[contains(text(),'Pan tajado')]`).should('have.text','Pan tajado'),
        secondProductCoupon: () => cy.xpath(`//tr[@id="order-1"]//td[contains(text(),'Si')]`).should('have.text','Si'),
        thirdProductName: () => cy.xpath(`//tr[@id="order-2"]//td[contains(text(),'Jamón Premium')]`).should('have.text','Jamón Premium'),
        thirdProductCoupon: () => cy.xpath(`//tr[@id="order-2"]//td[contains(text(),'No')]`).should('have.text','No')
        
    }
    
    
    
}
module.exports = new MyOrders();






















