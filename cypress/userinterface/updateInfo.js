const imagen ="Logo.png";
class UpdateInfo {

    elements = {
        profilePicture: () =>  cy.xpath('//input[@id="image"]').attachFile(imagen),
        profileName: () => cy.get('#name').clear().type('Welmar'),
        profileLastName: () => cy.get('#lastName').clear().type('Chaverra'),
        profileDate: () => cy.get('#bornDate').clear().type('29/10/1990'),
        profileCountry: () => cy.get('#country').select('2'),
        profileGender: () => cy.get('#F').click(),
        saveUpdate: () => cy.get('#save-profile').click(),
        updateMessage:() => cy.xpath(`//p[contains(text(),'Tu información se guardó correctamente')]`).should('have.text','Tu información se guardó correctamente'),

        
        emptyFieldProfileName: () => cy.get('#name').clear(),
        emptyFieldProfileLastName: () => cy.get('#lastName').clear(),
        emptyFieldProfileDate: () => cy.get('#bornDate').clear(),
        emptyFieldProfileCountry: () => cy.get('#country'),

        erroImage: () => cy.get('#e-image').should('be.visible'),
        erroName: () => cy.get('#e-name').should('be.visible'),
        erroLastName: () => cy.get('#e-lastName').should('be.visible'),
        erroDate: () => cy.get('#e-bornDate').should('be.visible')


  
        
        
    }
    
    
    
}
module.exports = new UpdateInfo();


   