from selenium.webdriver.support import expected_conditions

from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait


@given(u'launch chrome browser')
def launchbrowser(context):
    context.driver = webdriver.Chrome()


@when(u'open orange hrm homepage')
def openHomePage(context):
    context.driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


@then(u"verify that the logo present on page")
def verifyLogo(context):
    wait = WebDriverWait(context.driver, 10)
    logo = wait.until(
        expected_conditions.visibility_of_element_located((By.XPATH, "//*[@id='app']/div[1]/div/div[2]/img"))
    )
    assert logo.is_displayed()


@then(u'close browser')
def closeBrowser(context):
    context.driver.close()
