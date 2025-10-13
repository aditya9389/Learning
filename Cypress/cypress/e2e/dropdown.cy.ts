describe('Dropdown demo', () => {
    it.skip('Dropdown with select',() => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.get('a.cwf-change-country').click();
        cy.get('select[name="CASECF7"]')
        .select('India')
        .should('have.value','India');
    });
    it('Dropdown without select',() => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('India{enter}');
        cy.get('#select2-billing_country-container').should('have.text','India');
    });
    it('Auto Suggest Dropdown',() => {
        cy.visit('https://www.wikipedia.org/');
        cy.get('input[name="search"]').type('Delhi');
        cy.get('.suggestion-title').contains('Delhi University').click();
        cy.url().should('include','Delhi_University');
    });
    it('Dynamic Dropdown',() => {
        cy.visit('https://www.google.com/');
        cy.get('input[name="q"]').type('cypress automation');
        //cy.wait(4000); //static wait is not recommended
        //prefer dynamic wait
        cy.get('div.wM6W7dd>span',{timeout:10000}).should('have.length.greaterThan',0); //dynamic wait
        cy.get('div.wM6W7dd>span').should('have.length.greaterThan',0);
        cy.get('div.wM6W7dd>span').each(($el,index,$list) => {
            if($el.text() === 'cypress automation tutorial') {
                cy.wrap($el).click(); //wrap is used to convert jquery element to cypress element
            }
        });
    });
});