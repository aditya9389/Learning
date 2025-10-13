describe('CaseWare Demo',()=>{
    it('Visit CaseWare Demo site',function(){
        cy.visit('https://www.caseware.com/');
        cy.url().should('include','caseware');
        
        //Using data attribute (best & most reliable)
        cy.get('[data-cky-tag="accept-button"]').click();
        // Using aria-label
        // cy.get('[aria-label="Accept All"]').click()
        // Using button text
        // cy.contains('button', 'Accept All').click()
        // Using class (only if class is unique)
        // cy.get('.cky-btn-accept').click()

        cy.contains('a', 'No thanks').click();
        cy.contains('span','Get started now').click();
        cy.iframe('#hs-form-iframe-0').within(() => {
            cy.get('input[name="firstname"]').type('Aditya');
            cy.get('input[name="lastname"]').type('Kumar');
            cy.get('input[name="email"]').type('aditya.pratap9639@gmail.com');
            cy.get('input[name="phone"]').type('9389609121');
            cy.get('select[name="country"]').select('India');
            cy.get('input[name="company"]').type('GlobalLogic');
            cy.get('select[name="vertical_market"]').select('University/College');
            cy.get('select[name="numemployees"]').select('1-10');
            cy.get('select[name="job_function_2"]').select('Student');
            cy.get('select[name="products_of_interest_external"]').select('Not sure');
            cy.get('input[name="by_checking_this_box_you_express_your_consent_to_receive_email_communications_from_caseware_idea__t"]').check();
            cy.get('.hs-button.primary.large').click();
        });

    })
})