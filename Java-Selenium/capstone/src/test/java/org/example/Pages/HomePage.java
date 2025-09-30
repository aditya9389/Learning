package org.example.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.JavascriptExecutor;

public class HomePage {
    private WebDriver driver;

    @FindBy(xpath = "//ul[@id='myBtnContainer']//button[text()='Adidas']")
    private WebElement adidasLink;

    @FindBy(xpath = "//ul[@id='myBtnContainer']//button[text()='Nike']")
    private WebElement nikeLink;

    @FindBy(xpath = "//*[@id=\"sportsCollection\"]/h2")
    private WebElement sportsSection;

    @FindBy(xpath ="//*[@id=\"mensCollection\"]/ul/li[1]/div/div/h3/a")
    private WebElement hoverFirstProduct;

    @FindBy(xpath= "/html/body/div/div[3]/section[2]/div[2]/ul/li[1]/div/figure/ul/li[2]/button")
    private WebElement firstProductAddToWishlist;

    @FindBy(xpath= "//*[@id=\"sportsCollection\"]/ul/li/div/div/h3/a")
    private WebElement hoverFirstSportsProducrt;

    @FindBy(xpath = "/html/body/div/div[3]/section[2]/div[4]/ul/li/div/figure/ul/li[1]")
    private WebElement firstProductToCart;

    @FindBy(xpath = "//a[@href='/cart']")
    private WebElement cartLink;

    @FindBy(xpath = "//*[@id=\"root\"]/div[1]/div/div[4]/ul/nav/div[2]/li[3]/span/a")
    private WebElement wishListlink;

    @FindBy(xpath = "//*[@id=\"root\"]/div[1]/div/div[4]/ul/nav/div[2]/li[5]")
        private WebElement logoutLink;



    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public WebElement clickAdidas() {
        return adidasLink;
    }

    public WebElement clickNike() {
        return nikeLink;
    }

    public void scrollToSportsSection() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", sportsSection);
    }

    public WebElement hoverOverFirstProduct() {
        return hoverFirstProduct;
    }

    public WebElement addFirstProductToWishlist() {
        return firstProductAddToWishlist;
    }

    public WebElement addFirstProductToCart(){
        return firstProductToCart;
    }

    public WebElement hoverFirstSportsProduct(){
        return hoverFirstSportsProducrt;
    }

    public WebElement goToCart(){
        return cartLink;
    }

    public WebElement goTowishlist(){
        return wishListlink;
    }

    public WebElement goToLogout(){
        return logoutLink;
    }


}

