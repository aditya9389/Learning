describe('tabs demo', () => {
    it('Handling tabs',() => {
        cy.visit('https://demo.automationtesting.in/Windows.html');
        cy.get('#Tabbed > a:nth-child(1)').click();
        cy.get('#Tabbed > a:nth-child(1)').invoke('removeAttr','target').click(); //remove target attribute to open link in same tab
        cy.url().should('include','https://demo.automationtesting.in/Windows.html');
    });
    it('Handling tabs with js',() => {
        cy.visit('https://demo.automationtesting.in/Windows.html');
        cy.get('#Tabbed > a:nth-child(1)').click();
        cy.window().then((win) => {
            win.location.href = 'https://demo.automationtesting.in/Windows.html';
        });
        cy.url().should('include','https://demo.automationtesting.in/Windows.html');
    });
});