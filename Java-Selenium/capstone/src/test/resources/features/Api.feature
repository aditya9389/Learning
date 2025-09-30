Feature:
  Background:
    Given set the base uri

  Scenario: Import products
    When get request to import products
    Then status code is 200
    And response contains non empty product array

  Scenario: Signup user
    When post request to signup user
    Then status code is 201
    And response contains "User created"
    And response fields are not null

  Scenario: Login user
    When post request to login user
    Then status code is 200
    And response contains "Login successful"
    And token is not null and not empty

  Scenario: Add to cart
    When post request to add to cart
    Then status code is 200
    And response contains "Item added to cart"
    And response fields are same as request

  Scenario: Get user cart
    When get request to user cart
    Then status code is 200
    And response is an array
    And each response contains required fields

  Scenario: Delete item from cart
    When delete request to remove cart item
    Then status code is 200
    And response contains "Item deleted from cart successfully"

  Scenario: Clear user cart
    When delete request to clear cart
    Then status code is 200
    And response contains "Cart cleared successfully"

  Scenario: Add to wishlist
    When post request to add to wishlist
    Then status code is 201
    And response contains "Item added to wishlist"
    And response fields are same as request two

  Scenario: Get wishlist
    When get request to wishlist
    Then status code is 200
    And response is an array
    And each item contains required fields

  Scenario: Delete from wishlist
    When delete request to wishlist
    Then status code is 204