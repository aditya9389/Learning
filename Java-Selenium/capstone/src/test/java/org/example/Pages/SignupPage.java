package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignupPage {
    private WebDriver driver;

    @FindBy(xpath = "//button[@id='signUp']")
    private WebElement signUpTabButton;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@placeholder='Name']")
    private WebElement nameField;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@placeholder='Email']")
    private WebElement emailField;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//input[@placeholder='Password']")
    private WebElement passwordField;

    @FindBy(xpath = "//div[@class='form-container sign-up-container']//button[text()='Sign Up']")
    private WebElement signupButton;

    @FindBy(id = "signup-success")
    private WebElement successMessage;

    public SignupPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickSignUpTab() {
        signUpTabButton.click();
    }

    public void enterName(String name) {
        nameField.sendKeys(name);
    }

    public void enterEmail(String email) {
        emailField.sendKeys(email);
    }

    public void enterPassword(String password) {
        passwordField.sendKeys(password);
    }

    public void clickSignup() {
        signupButton.click();
    }

    public String getSuccessMessage() {
        return successMessage.getText();
    }

    public boolean verifyAndAcceptSignupAlert() {
        try {
            String alertText = driver.switchTo().alert().getText();
            boolean isSuccess = alertText.contains("User created successfully");
            driver.switchTo().alert().accept();
            return isSuccess;
        } catch (Exception e) {
            return false;
        }
    }
}
