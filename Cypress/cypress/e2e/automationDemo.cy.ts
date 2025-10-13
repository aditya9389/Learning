describe('Autmation demo website', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');
        cy.get('input[data-qa="login-email"]').type("selenium.Test@gmail.com");
        cy.get('input[name="password"]').type('123456789');
        cy.get('button[data-qa="login-button"]').click();
    })
    it('login check',() => {
        cy.contains('Logout');
    });
    it('Add to cart',() => {
        cy.get('a[href="/products"]').click();
        cy.get('a[href="#Men"]').click();
        cy.get('a[href="/category_products/3"]').click();
        cy.get('a[href="/product_details/2"]').click();
        cy.get('button[type="button"]').click();
        cy.get('a[href="/view_cart"]').eq(1).click();
        cy.get('a.btn.btn-default.check_out').click();
        cy.get('a[href="/payment"]').click();
        cy.get('input[name="name_on_card"]').type('Aditya Kumar');
        cy.get('input[name="card_number"]').type('1234567890123456');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('button[id="submit"]').click();
        cy.contains('Order Placed!');
    }); 
});