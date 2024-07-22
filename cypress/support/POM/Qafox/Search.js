class Search{

    SearchProduct(){
        cy.get('input[class="form-control input-lg"]').type("MacBook");
        cy.get('button[class="btn btn-default btn-lg"]').click();

    }

}

export default Search;