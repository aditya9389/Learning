
from behave import *
from selenium import webdriver
from selenium.common import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait


@given(u'I launch Chrome Browser')
def LaunchCrome(context):
    context.driver = webdriver.Chrome()

@when(u'I open orange HRM Homepage')
def Homepage(context):
    context.driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

@when(u'Enter username "{user}" and password "{pwd}"')
def enter_details(context, user, pwd):
    wait = WebDriverWait(context.driver, 10)
    username = wait.until(
        expected_conditions.visibility_of_element_located(
            (By.XPATH, "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")
        )
    )
    username.send_keys(user)
    context.driver.find_element(
        By.XPATH, "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"
    ).send_keys(pwd)
    context.driver.find_element(
        By.XPATH, "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"
    ).click()

@then(u'User must successfully login to DashBoard page')
def loginclick(context):
    try:
        wait = WebDriverWait(context.driver, 3)
        dashboard = wait.until(
            expected_conditions.visibility_of_element_located(
                (By.XPATH, "//*[@id='app']/div[1]/div[1]/header/div[1]/div[1]/span/h6"))
        )
    except:
        context.driver.close()
        assert False,"Test Failed"
    assert dashboard.is_displayed()
