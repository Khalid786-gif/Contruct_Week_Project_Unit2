class Login{
    LoginUser(){
        
        cy.xpath('(//span[@class="hidden-xs hidden-sm hidden-md"])[3]').click({force:true});
        
        cy.contains("Login").click({force:true});
        
        cy.get('#input-email').type("bkhalif123@gmail.com");
        
        cy.get('#input-password').type("Stepup@12345");
        
        cy.get('form > .btn').click({force:true});
    }
}

export default Login;