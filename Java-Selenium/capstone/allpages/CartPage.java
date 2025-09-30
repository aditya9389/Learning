package allpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {

    WebDriver driver;

    public CartPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//select[@class='select-box']")
    private WebElement selectBox;

    @FindBy(xpath = "//div[@class='grid-items text-aligns-price']")
    private WebElement subtotalPrice;

    @FindBy(xpath = "//button[text()='Checkout']")
    private WebElement checkoutButton;

    @FindBy(xpath = "//h2[text()='Cart is empty']")
    private WebElement emptyCartMessage;


    public WebElement getSelectBox() { return selectBox; }
    public WebElement getSubtotalPrice() { return subtotalPrice; }
    public WebElement getCheckoutButton() { return checkoutButton; }
    public WebElement getEmptyCartMessage() { return emptyCartMessage; }
}
