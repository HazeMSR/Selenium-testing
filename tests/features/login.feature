Feature: Sign in
  Scenario: User signs in with valid credentials
    Given User is in Home Page
    Then enters <username> and <password>:
    Then Clicks on SUBMIT button
    Then User is redirected to /test/newtours/login_sucess.php
    And Success message is displayed in screen