package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SigninPage {
    private WebDriver driver;

    @FindBy(xpath = "//div[@class=\"form-container sign-in-container\"]//input[@placeholder=\"Email\"]")
    private WebElement emailField;

    @FindBy(xpath = "//div[@class=\"form-container sign-in-container\"]//input[@placeholder=\"Password\"]")
    private WebElement passwordField;

    @FindBy(xpath = "//div[@class=\"form-container sign-in-container\"]//button[text()=\"Sign In\"]")
    private WebElement signinButton;

    @FindBy(id = "signin-success")
    private WebElement successMessage;

    public SigninPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterEmail(String email) {
        emailField.sendKeys(email);
    }

    public void enterPassword(String password) {
        passwordField.sendKeys(password);
    }

    public void clickSignin() {
        signinButton.click();
    }
    public boolean verifyAndAcceptSigninAlert() {
        try {
            String alertText = driver.switchTo().alert().getText();
            boolean isSuccess = alertText.contains("Login successful");
            driver.switchTo().alert().accept();
            return isSuccess;
        } catch (Exception e) {
            return false;
        }
    }
}
