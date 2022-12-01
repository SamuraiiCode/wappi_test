class HomePage {

    elements = {
        FreeCoupon:() => cy.get('#welcome-coupon').click(),
        UserNameLogin:() => cy.get('[class="username"]').should('have.text','Usuario: prueba1')
    }
    
}
module.exports = new HomePage();




