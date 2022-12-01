Feature: Update personal information

  As a user certification in wappi web page
  i need to do a update my personal info
  

  Scenario: Update successful
    Given I login in wappi web page
    And I click in informacion personal
    When I enter info
    Then i see the changes

    Scenario: Required fields
      Given I login in wappi web page
      And I click in informacion personal
      When I enter information without required fields
      Then I can see errors
