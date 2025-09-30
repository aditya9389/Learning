package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class CartPage {
    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\"root\"]/div[2]/div/div[1]/div/div[2]/p[2]")
    private WebElement productSize;

    @FindBy(xpath = "//*[@id=\"root\"]/div[2]/div/div[1]/div/div[2]/select")
    private WebElement quantityInput;

    @FindBy(xpath = "//*[@id=\"root\"]/div[2]/div/div[1]/div/div[3]/p")
    private WebElement price;

    @FindBy(xpath = "//div[@class='grid-items text-aligns-price']")
    private WebElement subtotal;

    @FindBy(xpath = "//button[text()='Checkout']")
    private WebElement checkoutButton;

    @FindBy(xpath = "//h2[text()='Cart is empty']")
    private WebElement emptyMessage;


    public CartPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public String getProductSize() {
        return productSize.getText();
    }

    public void setQuantity(int quantity) {
        Select select = new Select(quantityInput);
        select.selectByValue(String.valueOf(quantity));
    }

    public double getPrice() {
        String priceText = price.getText().replace("$", "");
        return Double.parseDouble(priceText);
    }

    public double getSubtotal() {
        String subtotalText = subtotal.getText().replace("$", "");
        return Double.parseDouble(subtotalText);
    }

    public void clickCheckout() {
        checkoutButton.click();
    }

    public WebElement isCartEmpty() {
        return emptyMessage;
    }

    public String getEmptyMessage() {
        return emptyMessage.getText();
    }
}
