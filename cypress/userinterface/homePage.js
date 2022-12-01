class HomePage {

    elements = {
        FreeCoupon:() => cy.get('#welcome-coupon').click(),
        UserNameLogin:() => cy.get('[class="username"]').should('have.text','Usuario: prueba1'),
        UpdateInfo: () => cy.get('[href="/profile"]').click()
    }
    
}
module.exports = new HomePage();




