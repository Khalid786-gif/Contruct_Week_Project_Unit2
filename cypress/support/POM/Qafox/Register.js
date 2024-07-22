class Register{

    OpenWebsite(){
        cy.visit('https://tutorialsninja.com/demo/')
    }

    RegisterUser(){
        cy.xpath('(//span[@class="hidden-xs hidden-sm hidden-md"])[3]').click({force:true});
        
        cy.contains("Register").click({force:true});
        
        cy.get('#input-firstname').type("Khalid");
        
        cy.get('#input-lastname').type("B");
        
        cy.get('#input-email').type("bkhalif123@gmail.com");
        
        cy.get('#input-telephone').type("1234567890");
        
        cy.get('#input-password').type("Stepup@12345");
        
        cy.get('#input-confirm').type("Stepup@12345");
        
        cy.get('[type="checkbox"]').check();
        
        cy.get('.pull-right > .btn').click({force:true})
    }


}


export default Register;