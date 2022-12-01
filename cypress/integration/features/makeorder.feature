Feature: Make an order

  As a user certification in wappi web page
  i need to make an order 
  

  Scenario: Make order successful
     Given I login in wappi web page
     And I get free coupon
     When I make an order with and without coupon
     Then I see the order in my orders


  Scenario: Use coupon more two twice
     Given I login in wappi web page
     And I get free coupon
     When I make an order with the same coupon
     Then I see an error with the coupon

  Scenario: Use coupon unexist
     Given I login in wappi web page
     And I get free coupon
     When I make an order with unexisting coupon
     Then I see an error with the coupon
