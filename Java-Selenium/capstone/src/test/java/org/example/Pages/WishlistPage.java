package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WishlistPage {
    private WebDriver driver;

    @FindBy(xpath = "/html/body/div/div[2]/div[2]/div/div[2]/button")
    private WebElement addToCartButton;

    @FindBy(xpath = "//*[@id=\"root\"]/div[2]/div/h2")
    private WebElement emptyMessage;

    public WishlistPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void addProductToCart() {
        addToCartButton.click();
    }

    public String getEmptyMessage() {
        return emptyMessage.getText();
    }
}
