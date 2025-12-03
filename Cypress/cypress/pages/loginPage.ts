export default class loginpage{
    constructor(private iframeSelector?:string){}

    root(){
        // if(this.iframeSelector) return cy.iframe(this.iframeSelector);
        // return cy;
        return this.iframeSelector ? cy.iframe(this.iframeSelector) : cy; //above and this will work same
        // main thing this doing is if iframe selector is there then it will return iframe else it will return cy
    }

    loginEmail='input[data-qa="login-email"]';
    loginPassword='input[data-qa="login-password"]';
    loginButton='button[data-qa="login-button"]';

    login(email:string, password:string){
        if(!this.iframeSelector){
        this.root().get(this.loginEmail).type(email); //find is not working here because find works only when there is a parent child relation
        this.root().get(this.loginPassword).type(password);
        this.root().get(this.loginButton).click();}
    }
}