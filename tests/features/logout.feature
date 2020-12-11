Feature: Logout
    
    Scenario: The user logs out an account
        Given the user is logged in with an account 
        When the user clicks the SIGN-OFF button
        Then the website shows the home page