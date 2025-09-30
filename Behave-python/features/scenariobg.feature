Feature: OrangeHRM Login

  Scenario: Login to OrangeHRM with valid parameters
    Given I launch Chrome Browser
    When I open orange HRM Homepage
    And Enter username "Admin" and password "admin123"
    Then User must successfully login to DashBoard page

  Scenario: Search user
    Given I launch Chrome Browser
    When I open orange HRM Homepage
    And Enter username "Admin" and password "admin123"
    Then User must successfully login to DashBoard page

  Scenario: Advanced Search user
    Given I launch Chrome Browser
    When I open orange HRM Homepage
    And Enter username "Admin" and password "admin123"
    Then User must successfully login to DashBoard page
