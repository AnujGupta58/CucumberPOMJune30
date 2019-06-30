Feature: DemoWebShop Login Functionality

  Scenario Outline: Title of your scenario outline
    Given User is on DemoWebShop HomePage
    When User enter "<email>" and "<password>" on login page
    Then User should be logged in successfully

    Examples: 
      | email              | password  |
      | pratiksha@test.com | pratiksha |
      | rick@test.com      | tester    |
