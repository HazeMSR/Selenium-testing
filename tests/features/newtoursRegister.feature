Feature: Register on newtours
    Scenario: Successful Register with valid entries
    Given fill the data for  <firstName>
    Given fill the data for  <lastName>
    Given fill the data for  <phone>
    Given fill the data for  <address1>
    Given fill the data for  <city>
    Given fill the data for  <state>
    Given fill the data for  <postalCode>
    Given fill the data for  <country>
    Given fill the data for  <userName>
    Given fill the data for  <password>
    Given fill the data for  <confirmPassword>
    When the user click on submit 