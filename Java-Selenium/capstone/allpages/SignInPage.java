package allpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {
    WebDriver driver;

    public SignInPage( WebDriver driver ){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//div[@class='form-container sign-in-container']//input[@name='email']")
    private WebElement emailField;

    @FindBy(xpath = "//div[@class='form-container sign-in-container']//input[@name='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//div[@class='form-container sign-in-container']//button[text()='Sign In']")
    private WebElement signInButton;

    @FindBy(id = "signUp")
    private WebElement toggleButton;

    public WebElement getEmailField() {
        return emailField;
    }

    public WebElement getPasswordField() {
        return passwordField;
    }

    public WebElement getSignInButton() {
        return signInButton;
    }

    public WebElement getToggleButton() {
        return toggleButton;
    }
}
