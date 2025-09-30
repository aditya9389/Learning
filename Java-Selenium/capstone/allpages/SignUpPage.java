package allpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignUpPage {

    WebDriver driver;

    public  SignUpPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@name='name']")
    private WebElement nameField;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@name='email']")
    private WebElement emailField;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@name='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//button[@class='sign-button']")
    private WebElement signUpButton;

    public WebElement getNameField() {
        return nameField;
    }

    public WebElement getEmailField() {
        return emailField;
    }

    public WebElement getPasswordField() {
        return passwordField;
    }

    public WebElement getSignUpButton() {
        return signUpButton;
    }
}
