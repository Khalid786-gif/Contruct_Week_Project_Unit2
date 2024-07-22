class RegisterAffiliate{

    RegAffiliate(){
        cy.get('.dropdown-menu > :nth-child(1) > a').contains("My Account").click({force:true})
        cy.xpath('//a[text()="Register for an affiliate account"]').click();
        cy.get('#input-company').type('XYZ Private Limited');
        cy.get('#input-website').type('XYZ.com');
        cy.get('#input-tax').type('987456321');
        cy.get('#input-tax').type('ABC');
        cy.get('[type="checkbox"]').check();
        cy.get('.pull-right > .btn').click({force:true});
    }

}

export default RegisterAffiliate;