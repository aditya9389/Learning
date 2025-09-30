Feature: Shopping Application End-to-End Scenarios

  @first
  Scenario: Signup with Excel data
    Given user navigates to the signup page
    When user registers with details from the Excel file
    Then registration should be successful

  @rem
  Scenario: Signin with Excel data
    Given user navigates to the signin page
    When user logs in using data from the Excel file
    Then login should be successful

  @rem
  Scenario: Add Adidas product to Wishlist
    When user selects Adidas and adds the first product to wishlist
    Then an alert should confirm product is added to wishlist

  @rem
  Scenario: Add Nike product to cart
    When user selects Nike, scrolls to Sports section, and adds a product to cart
    Then an alert should confirm product is added to cart

  @rem
  Scenario: Validate cart details
    When user opens the cart page
    Then the cart page should open with correct URL
    And the product size displayed should be "Adult"

  @rem
  Scenario: Validate subtotal with quantity
    When user opens the cart page
    And user increases product quantity to 3
    Then the subtotal should equal price multiplied by 3

  @rem
  Scenario: Successful checkout
    When user opens the cart page
    And user proceeds to checkout
    Then checkout page should load with correct URL

  @rem
  Scenario: Validate empty cart after checkout
    When user navigates back to cart
    Then verify that the cart is empty

  @rem
  Scenario: Move product from wishlist to cart
    When user opens the wishlist page
    Then user moves a product from wishlist to cart
    And wishlist should display empty message

  @rem
  Scenario: Checkout functionality of a wishlist product
    When user goes to cart and continues to checkout
    Then checkout page should load with correct URL

  @rem
  Scenario: Validate empty cart after checkout of a wishlist product
    When user navigates back to cart
    Then verify that the cart is empty

  @rem
  Scenario: Successful logout
    When user clicks logout button
    Then user should be redirected to the login page
