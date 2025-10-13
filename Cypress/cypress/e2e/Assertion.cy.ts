describe('Assertion demo', () => {
    it('Implicit Assertion',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orangehrmlive.com');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('not.contain','123');
        //chained assertion
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm');    
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist');
    });
    it('Explicit Assertion',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        let a = 5;
        let b = 10;
        expect(a).to.equal(5);
        assert.equal(a,5);
        expect(a).to.be.lessThan(b);
        assert.isBelow(a,b);
        expect(b).to.be.greaterThan(a);
        assert.isAbove(b,a);
        let str = 'Welcome to Cypress automation tool';
        expect(str).to.include('Cypress');
        assert.include(str,'Cypress');
        expect(str).to.equal('Welcome to Cypress automation tool');
        assert.equal(str,'Welcome to Cypress automation tool');
        expect(str).to.have.length(34);
        assert.lengthOf(str,34);
        expect(str).to.have.length(34);
        assert.lengthOf(str,34);
        expect(true).to.be.true;
        expect(false).to.be.false;
        const arr = [1,2,3,4,5];
        expect(arr).to.have.members([1,2,3,4,5]);
        expect(arr).to.include.members([1,3,5]);
        expect(arr).to.have.length(5);
        const obj = {
            name: 'John',
            age: 30
        };
        expect(obj).to.have.property('name');
        assert.property(obj,'name');
        expect(obj).to.have.property('age',30);
        assert.propertyVal(obj,'age',30);
    });
});