export default class ProductPage{
    constructor(private iframeSelector?:string){}
    root(){
        return this.iframeSelector ? cy.iframe(this.iframeSelector) : cy; 
    }

    productPage='a[href="/products"]';
    menCategory ='a[href="#Men"]';
    tshirtCategory='a[href="/category_products/3"]';
    firstProduct='a[href="/product_details/2"]';
    addToCartButton='button[type="button"]';
    cartButton='a[href="/view_cart"]';

    clickFirstProduct(){
        this.root().get(this.productPage).click();
        this.root().get(this.menCategory).click();
        this.root().get(this.tshirtCategory).click();
        this.root().get(this.firstProduct).click();
    }
    addProductToCart(){
        this.root().get(this.addToCartButton).click();
        this.root().get(this.cartButton).eq(1).click();
    }
    
}