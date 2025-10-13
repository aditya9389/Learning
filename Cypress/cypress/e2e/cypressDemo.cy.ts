const credentials:{firstname:string,lastname:string,username:string,password:string}={
    firstname:"aditya",
    lastname:"kumar",
    username:"pratapaditya@gmail.com",
    password:"Aditya@123"
};
describe('Cypress Demo', () => {
    before(() => {
        cy.visit('http://localhost:3000/');
        cy.get('a[href="/signup"]').click();
        cy.get('input[name="firstName"]').type(credentials.firstname);
        cy.get('input[name="lastName"]').type(credentials.lastname);
        cy.get('input[name="username"]').type(credentials.username);
        cy.get('input[name="password"]').type(credentials.password);
        cy.get('input[name="confirmPassword"]').type(credentials.password);
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/signin');
    })
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="username"]').type(credentials.username);
        cy.get('input[name="password"]').type(credentials.password);
        cy.get('input[name="remember"]').check();
        cy.get('button[type="submit"]').click();
        cy.contains('Next').click();
        // cy.iframe('.spec-iframe').find('button[text="Next"]').click();
    })
    it('demo',() => {
        cy.url().should('include', 'localhost');
    });
});