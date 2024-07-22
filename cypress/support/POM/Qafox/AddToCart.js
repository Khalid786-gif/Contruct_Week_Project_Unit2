class AddToCart{

    AddProduct(){
        cy.xpath('(//span[text()="Add to Cart"])[1]').click({force:true});
    }
}

export default AddToCart;