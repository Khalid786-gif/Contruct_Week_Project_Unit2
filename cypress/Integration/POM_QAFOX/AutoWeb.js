import Register from "../../support/POM/Qafox/Register";
import Login from "../../support/POM/Qafox/Login";
import Search from "../../support/POM/Qafox/Search";
import AddToCart from "../../support/POM/Qafox/AddToCart";
import ShoppingCart from "../../support/POM/Qafox/ShoppingCart";
import CheckOut from "../../support/POM/Qafox/CheckOut";
import RegisterAffiliate from "../../support/POM/Qafox/RegisterAffiliate";

describe('Qafox Web Automation', () => {

    const Register_Page = new Register;
    const Login_Page = new Login;
    const Search_box = new Search;
    const Add_cart = new AddToCart;
    const Shopping_cart = new ShoppingCart;
    const Check_out = new CheckOut;
    const Register_Affiliate = new RegisterAffiliate;

    it('Automation using POM', () => {

        Register_Page.OpenWebsite();
        Register_Page.RegisterUser();
        Login_Page.LoginUser();
        Search_box.SearchProduct();
        Add_cart.AddProduct();
        Shopping_cart.ShoppingCartPage();
        Check_out.CheckOutPage();
        Register_Affiliate.RegAffiliate();

        
    });
});