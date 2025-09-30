package org.example.Step;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.example.Pages.*;
import org.example.Utility.ExcelUtility;
import org.example.Utility.Utils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;
import java.util.Map;

public class ShoppingSteps {

    private final WebDriver driver = Hooks.driver;
    private SignupPage signupPage;
    private SigninPage signinPage;
    private WishlistPage wishlistPage;
    private CartPage cartPage;
    private CheckoutPage checkoutPage;
    private HomePage homePage;

    private final String excelPath = "C:\\Aditya\\projects\\capstone\\src\\test\\resources\\login_sheet.xlsx";
    private String alertMsg;

    @Given("user navigates to the signup page")
    public void user_navigates_to_the_signup_page() {
        driver.get("http://localhost:3000/login");
        signupPage = new SignupPage(driver);
    }

    @When("user registers with details from the Excel file")
    public void user_registers_with_details_from_the_excel_file() throws Exception {
        ExcelUtility excel = new ExcelUtility(excelPath);
        Map<String, String> data = excel.getRowData("Sheet1", 1);

        signupPage.clickSignUpTab();
        signupPage.enterName(data.get("name"));
        signupPage.enterEmail(data.get("email"));
        signupPage.enterPassword(data.get("password"));
        Thread.sleep(2000);
        signupPage.clickSignup();

        excel.close();
    }

    @Then("registration should be successful")
    public void registration_should_be_successful() {
        Assert.assertTrue(signupPage.verifyAndAcceptSignupAlert());
        driver.quit();
    }

    @Given("user navigates to the signin page")
    public void user_navigates_to_the_signin_page() {
        driver.get("http://localhost:3000/login");
        signinPage = new SigninPage(driver);
    }

    @When("user logs in using data from the Excel file")
    public void user_logs_in_using_data_from_the_excel_file() throws Exception {
        ExcelUtility excel = new ExcelUtility(excelPath);
        Map<String, String> data = excel.getRowData("Sheet1", 1);

        signinPage.enterEmail(data.get("email"));
        signinPage.enterPassword(data.get("password"));
        signinPage.clickSignin();

        Thread.sleep(2000);
        excel.close();
    }

    @Then("login should be successful")
    public void login_should_be_successful() {
        Assert.assertTrue(signinPage.verifyAndAcceptSigninAlert());
    }

    @When("user selects Adidas and adds the first product to wishlist")
    public void user_selects_adidas_and_adds_first_product_to_wishlist() throws InterruptedException {
        homePage = new HomePage(driver);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        Utils.Hover(driver, homePage.clickAdidas());
        wait.until(ExpectedConditions.elementToBeClickable(homePage.clickAdidas())).click();

        Utils.Hover(driver, homePage.hoverOverFirstProduct());
        wait.until(ExpectedConditions.visibilityOf(homePage.addFirstProductToWishlist())).click();
    }

    @Then("an alert should confirm product is added to wishlist")
    public void an_alert_should_confirm_product_is_added_to_wishlist() throws InterruptedException {
        Thread.sleep(2000);
        alertMsg = driver.switchTo().alert().getText();

        Assert.assertEquals(alertMsg, "Item added to wishlist");
        driver.switchTo().alert().accept();
    }

    @When("user selects Nike, scrolls to Sports section, and adds a product to cart")
    public void user_selects_nike_and_adds_product_to_cart() throws InterruptedException {
        homePage = new HomePage(driver);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        Utils.Hover(driver, homePage.clickNike());
        wait.until(ExpectedConditions.elementToBeClickable(homePage.clickNike())).click();

        homePage.scrollToSportsSection();

        Utils.Hover(driver, homePage.hoverFirstSportsProduct());
        Utils.Hover(driver, homePage.addFirstProductToCart());
        wait.until(ExpectedConditions.visibilityOf(homePage.addFirstProductToCart())).click();
    }

    @Then("an alert should confirm product is added to cart")
    public void an_alert_should_confirm_product_is_added_to_cart() throws InterruptedException {
        Thread.sleep(2000);
        alertMsg = driver.switchTo().alert().getText();
        Assert.assertTrue(alertMsg.contains("Item added to cart"));
        driver.switchTo().alert().accept();
    }

    @When("user opens the cart page")
    public void user_opens_the_cart_page() throws InterruptedException {
        homePage = new HomePage(driver);
        Thread.sleep(2000);
        homePage.goToCart().click();
    }

    @Then("the cart page should open with correct URL")
    public void the_cart_page_should_open_with_correct_url() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertTrue(driver.getCurrentUrl().contains("/cart"));
    }

    @Then("the product size displayed should be {string}")
    public void the_product_size_displayed_should_be(String expectedSize) throws InterruptedException {
        Thread.sleep(2000);
        cartPage = new CartPage(driver);
        Assert.assertTrue(cartPage.getProductSize().contains(expectedSize));
    }

    @When("user increases product quantity to 3")
    public void user_increases_product_quantity_to_3() throws InterruptedException {
        cartPage = new CartPage(driver);
        cartPage.setQuantity(3);
        Thread.sleep(4000);
    }

    @Then("the subtotal should equal price multiplied by 3")
    public void the_subtotal_should_equal_price_multiplied_by_3() {
        double price = cartPage.getPrice();
        double subtotal = cartPage.getSubtotal();

        Assert.assertEquals(subtotal, price * 3, 0.01);
    }

    @When("user proceeds to checkout")
    public void user_proceeds_to_checkout() {
        cartPage = new CartPage(driver);
        cartPage.clickCheckout();
        checkoutPage = new CheckoutPage(driver);
    }

    @Then("checkout page should load with correct URL")
    public void checkout_page_should_load_with_correct_url() {
        Assert.assertTrue(checkoutPage.getCurrentUrl().contains("/checkout"));
    }

    @When("user navigates back to cart")
    public void user_navigates_back_to_cart() {
        homePage = new HomePage(driver);
        homePage.goToCart().click();
        cartPage = new CartPage(driver);
    }

    @Then("verify that the cart is empty")
    public void verify_that_the_cart_is_empty() {
        Assert.assertTrue(cartPage.isCartEmpty().isDisplayed());
    }

    @When("user opens the wishlist page")
    public void user_opens_the_wishlist_page() {
        homePage = new HomePage(driver);
        homePage.goTowishlist().click();
        wishlistPage = new WishlistPage(driver);
    }

    @Then("user moves a product from wishlist to cart")
    public void user_moves_a_product_from_wishlist_to_cart() throws InterruptedException {
        Thread.sleep(2000);
        wishlistPage.addProductToCart();

        Thread.sleep(2000); // keep: alert wait
        driver.switchTo().alert().accept();
    }

    @Then("wishlist should display empty message")
    public void wishlist_should_display_empty_message() throws InterruptedException {
        Thread.sleep(2000); // keep: wait for empty message
        Assert.assertEquals(wishlistPage.getEmptyMessage(), "Wishlist is empty");
    }

    @When("user goes to cart and continues to checkout")
    public void user_goes_to_cart_and_continues_to_checkout() {
        homePage = new HomePage(driver);
        homePage.goToCart().click();

        cartPage = new CartPage(driver);
        cartPage.clickCheckout();
        checkoutPage = new CheckoutPage(driver);
    }

    @When("user clicks logout button")
    public void user_clicks_logout_button() {
        homePage = new HomePage(driver);
        homePage.goToLogout().click();
        driver.switchTo().alert().accept();
    }

    @Then("user should be redirected to the login page")
    public void user_should_be_redirected_to_the_login_page() {
        Assert.assertTrue(driver.getCurrentUrl().contains("/login"));
    }
}
