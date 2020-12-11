Feature: Register Section
    
    Scenario: I register a valid user
        Given I navigates to the website
        When I enter to the REGISTER section
        And full-fill the form with valid data
        And click on the "Send" button
        Then a verification message is displayed