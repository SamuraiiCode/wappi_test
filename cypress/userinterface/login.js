 class Login {

    elements = {
        usernameInput: () => cy.get('#username').type('prueba1'),
        passwordInput: () => cy.get('#password').type('prueba1123'),
        button: () => cy.get('#button-login').click(),
        
    }
    
    
    
}
module.exports = new Login();