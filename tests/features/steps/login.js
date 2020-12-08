const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');

Given('the credentials are incorrect', async function () {
    await loginPage.typeUsername("test@example.com");
    await loginPage.typePassword("wrongPassword");
});

When('the user attempts to log in', async function () {
    await loginPage.submitButton().click()
});

Then('a(n) {word} message is displayed', async function (messageType) {
    await driver.wait(() => {
      return loginPage.loginMessage().isDisplayed();
    }, 15000);

    const actualMessage = await loginPage.loginMessage().getText();
    const expectedMessage = messageType === 'error' ? 'Enter your userName and password correct'
        : 'something else';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
});

