Feature: Login Functionality

  Background:
    Given The user navigates to the page

  Scenario: Successful login with valid credentials
    When the user enters the username as "standard_user"
    And the user enters the password as "secret_sauce"
    And the user clicks on the login button
    Then user login successfully

  Scenario: Unsuccessful login with invalid credentials
    When the user enters the username as "abcd"
    And the user enters the password as "sdfgh123"
    And the user clicks on the login button
    Then user shouldn’t login successfully
