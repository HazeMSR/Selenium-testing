const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const { Builder } = require('selenium-webdriver')
const { Before, After } = require('@cucumber/cucumber');
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

Before(async () => {
    global.driver = await new Builder().forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()

    await driver.get("http://demo.guru99.com/insurance/v1/index.php")
    await driver.manage().window().setRect(1440, 1080)
   
});

After(async () => {
    driver.quit();
});


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