describe('Mouse Operations', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
    });
    it('mouse hover', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('div:nth-child(1)>div.pricebar>button').trigger('mouseover').click();
        cy.contains('REMOVE').should('be.visible').then(($el)=>{
            expect($el).to.exist;
            expect($el).to.have.text('REMOVE');
            assert.exists($el,'REMOVE button exists');
        });
        cy.get('div:nth-child(6)>div.pricebar>button').scrollIntoView();
        cy.get('.svg-inline--fa.fa-shopping-cart.fa-w-18.fa-3x ').scrollIntoView().click();
        cy.contains('1').should('be.visible');
        cy.get('.btn_action.checkout_button').click();
    });
});