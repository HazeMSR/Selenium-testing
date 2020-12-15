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

Given('the email' , async function () {
    await loginPage.typeEmail("fasez26@me.com");
});
Given('the password' , async function () {
    await loginPage.typePassword("123456");
});

When('the click on login', async function () {
    await loginPage.submitButton().click()
});

// Then('Show the body of main page',async function(){
//     await driver.findElement(By.css("body")).click()
// })