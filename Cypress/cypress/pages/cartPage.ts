export default class CartPage{
    constructor(private iframeSelector?:string){}
    root(){
        return this.iframeSelector ? cy.iframe(this.iframeSelector) : cy; 
    }
    checkoutButton='a.btn.btn-default.check_out';
    paymentButton='a[href="/payment"]';

    checkout(){
        this.root().get(this.checkoutButton).click();
        this.root().get(this.paymentButton).click();
    }
}