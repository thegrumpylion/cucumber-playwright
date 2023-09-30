Feature: User Login

  Scenario: Successful Login
    Given I am on the login page
    When I enter my valid email and password
    Then I should be logged in and see the dashboard
