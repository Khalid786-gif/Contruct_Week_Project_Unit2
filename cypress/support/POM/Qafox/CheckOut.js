class CheckOut{


    //Checking out the product using below script however I tested that all products in the provided website are out of stock.

    CheckOutPage(){
        cy.get('.pull-right > .btn').click();
    }
}

export default CheckOut;