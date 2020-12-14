const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('the email' , async function () {
    await loginPage.typeEmail("fasez26@me.com");
});
Given('the password' , async function () {
    await loginPage.typePassword("123456");
});

When('the click on login', async function () {
    await loginPage.submitButton().click()
});

