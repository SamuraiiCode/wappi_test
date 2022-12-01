 class Login {

    elements = {
        enterUsername: () => cy.get('#username').type('prueba1'),
        enterPassword: () => cy.get('#password').type('prueba1123'),
        clickButton: () => cy.get('#button-login').click(),
        
    }
    
    
    
}
module.exports = new Login();