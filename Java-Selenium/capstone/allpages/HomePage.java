package allpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

    WebDriver driver;

    public HomePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }



    @FindBy(xpath = "//ul[@id='myBtnContainer']//button[text()='Adidas']")
    private WebElement adidasButton;

    @FindBy(xpath = "//figure[@class='card-banner']")
    private WebElement adidasCard;

//    @FindBy(xpath = "//button[@aria-labelledby='card-label-2']")
    @FindBy(xpath = "/html/body/div/div[3]/section[2]/div[2]/ul/li[1]/div/figure/ul/li[2]/button")
    private WebElement adidasAddToWishlistButton;


    @FindBy(xpath = "//ul[@id='myBtnContainer']//button[text()='Nike']")
    private WebElement nikeButton;

    @FindBy(xpath = "//figure[@class='card-banner']")
    private WebElement nikeCard;

    @FindBy(xpath = "//button[@aria-labelledby='card-label-2']")
    private WebElement nikeAddToCartButton;

    @FindBy(xpath = "//a[@href='/wishlist']")
    private WebElement gotoWishlistButton;

    @FindBy(xpath = "//a[@href='/cart']")
    private WebElement gotoCartButton;

    public WebElement getAdidasButton() {
        return adidasButton;
    }
    public WebElement getAdidasCard() { return adidasCard; }
    public WebElement getAdidasAddToWishlistButton() { return adidasAddToWishlistButton; }
    public WebElement getNikeButton() { return nikeButton; }
    public WebElement getNikeCard() { return nikeCard; }
    public WebElement getNikeAddToCartButton() { return nikeAddToCartButton; }
    public WebElement getGotoWishlistButton() { return gotoWishlistButton; }
    public WebElement getGotoCartButton() { return gotoCartButton; }
}
