Feature: login

    Scenario: User cannot log in with invalid credentials
        Given the credentials are in correct
        When the user attempts to log in
        Then an error message is displayed
