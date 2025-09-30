package allpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WishlistPage {
    WebDriver driver;

    public WishlistPage( WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[text()='ADD TO CART']")
    private WebElement addToCartButton;

    @FindBy(xpath = "//h2[text()='Wishlist is empty']")
    private WebElement emptyWishlistMessage;

    public WebElement getAddToCartButton() { return addToCartButton; }
    public WebElement getEmptyWishlistMessage() { return emptyWishlistMessage; }
}
