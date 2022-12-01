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
        updateMessage:() => cy.xpath(`//p[contains(text(),'Tu información se guardó correctamente')]`).should('have.text','Tu información se guardó correctamente')

  
        
        
    }
    
    
    
}
module.exports = new UpdateInfo();


   