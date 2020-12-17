const {Given, When, Then} = require('@cucumber/cucumber')
const assert = require('assert')
const loginPage = require('../../page_objects/login')

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const { Builder } = require('selenium-webdriver')
const { Before, After } = require('@cucumber/cucumber');
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

Before(async () => {
    global.driver = await new Builder().forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()

    await driver.get("http://demo.guru99.com/test/newtours/index.php")
    await driver.manage().window().setRect(1440, 1080)
   
});

After(async () => {
    driver.quit();
});

Given('User is in Home Page', async () => {
    const currentUrl = await loginPage.currentUrl()
})

Then('enters <username> and <password>:', async () => {
    await loginPage.setUserName('admin')
    await loginPage.setPassword('admin')
})

Then('Clicks on SUBMIT button', async() => {
    await loginPage.clickSubmit()
})

Then('User is redirected to \/test\/newtours\/login_sucess.php', async() => {
    const currenUrl = await loginPage.currentUrl()
    assert.equal(currenUrl, 'http://demo.guru99.com/test/newtours/login_sucess.php', 'ERROR: user is in' + currenUrl)
})

Then(`Success message is displayed in screen`, async() => {
    const messageTitle = await loginPage.loginMessageTitle().getText()
    const messageDescription = await loginPage.loginMessageDescription().getText()

    assert.equal(messageTitle, 'Login Successfully', 'ERROR: Actual title: ' + messageTitle)
    assert.equal(messageDescription, 'Thank you for Loggin.', 'ERROR: Actual description: ' + messageDescription)
})