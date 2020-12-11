Feature: login

    Scenario: User cannot log in with invalid credentials
        Given the credentials are incorrect
        When the user attempts to log in
        Then an error message is displayed

    Scenario Outline: User tries to log in with valid data.
        Given the user navigates to the website 
        When the user enters <user> as username
        And the user enters <pass> as password
        And clicks on Submit button 
        Then an error message is displayed
    
    Examples:
    |   user   |     pass    | 
    | jhebner0 |   az5Ux3MK  |
    | brunham1 | pj9hFCUavbn | 
    
    Scenario: User tries to log in without password.
        Given the user navigates to the website 
        When the user enters a valid username
        And clicks on Submit button 
        Then an error message is displayed
