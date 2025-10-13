describe('Google Automation',()=>{
    it('Visit Google site',function(){
        cy.visit('https://www.google.com/');
        cy.title().should('eq','Google');
    })
})
