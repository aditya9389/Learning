import CartPage from '../pages/cartPage';
import LoginPage from '../pages/loginPage';
import ProductPage from '../pages/productPage';
describe('Autmation demo website', () => {
    const productPage = new ProductPage();
    const loginPage = new LoginPage();
    const cartPage = new CartPage();
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');
        loginPage.login("selenium.Test@gmail.com","123456789");
    })
    it('login check',() => {
        cy.contains('Logout');
    });
    it('Add to cart',() => {
        cy.contains('b','TestApi').should('be.visible');
        productPage.clickFirstProduct();
        productPage.addProductToCart();
        cy.contains('Men Tshirt');
        cartPage.checkout();
        cy.get('input[name="name_on_card"]').type('Aditya Kumar');
        cy.get('input[name="card_number"]').type('1234567890123456');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('button[id="submit"]').click();
        cy.contains('Order Placed!');
    }); 
});