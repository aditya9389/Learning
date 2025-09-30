Feature: OrangeHRM Login

  Scenario: Login to OrangeHRM with valid parameters
    Given I launch Chrome Browser
    When I open orange HRM Homepage
    And Enter username "Admin" and password "admin123"
    Then User must successfully login to DashBoard page

  Scenario Outline: Login to OrangeHRM with multiple Parameters
    Given I launch Chrome Browser
    When I open orange HRM Homepage
    And Enter username "<username>" and password "<password>"
    Then User must successfully login to DashBoard page

    Examples:
      | username | password  |
      | admin | admin123  |
      | admin123  | admin |
      | adminxyz  | admin123  |
