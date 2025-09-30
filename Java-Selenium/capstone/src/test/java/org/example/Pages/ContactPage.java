package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactPage {
    WebDriver driver;
    public ContactPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "name")
    private WebElement nameInput;

    @FindBy(name = "email")
    private WebElement emailInput;

    @FindBy(name = "message")
    private WebElement messageInput;

    @FindBy(xpath = "//button[text()='Send']")
    private WebElement sendButton;

    public WebElement getNameInput() {
        return nameInput;
    }

    public WebElement getEmailInput() {
        return emailInput;
    }

    public WebElement getMessageInput() {
        return messageInput;
    }

    public WebElement getSendButton() {
        return sendButton;
    }
}

