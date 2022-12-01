Feature: Make an order

  As a user certification in wappi web page
  i need to make an order 
  

  Scenario: Make order successful
    Given I login in wappi web page
    And I get free coupon
    When I make an order with and without coupon
    Then i see the order in my orders