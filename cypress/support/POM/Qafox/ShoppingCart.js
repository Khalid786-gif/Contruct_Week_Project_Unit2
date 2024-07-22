class ShoppingCart{
    ShoppingCartPage(){
        cy.xpath('//a[text()="shopping cart"]').click()
    }
}

export default ShoppingCart