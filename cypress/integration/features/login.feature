Feature: Login page

  As a user certification in Sauce Demo web page
  i need to do a different log ins
  

  Scenario: Login successful
    Given I open Wappi page
    When I type credentials
    And I can click on get free coupon
    Then i see profile
  