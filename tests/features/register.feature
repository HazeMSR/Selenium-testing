Feature: Register Section
    
    Scenario: The user register a valid new account
        Given the user navigates to the REGISTER section
        When the user fills the form with valid data
        And clicks on the Send button
        Then a verification message is displayed
