const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/registerNewTours');
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

    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(1440, 1080)
   
});

After(async () => {
    driver.quit();
});

Given('fill the data for  <firstName>', async function () {
    await loginPage.typeFirstName("Luana");
  });

Given('fill the data for  <lastName>', async function () {
    await loginPage.typeLastName("Ozara");
  });

Given('fill the data for  <phone>', async function () {
    await loginPage.typePhone("5556575859");
  });

  Given('fill the data for  <address1>', async function () {
    await loginPage.typeAddress1("Mex");
  });
  Given('fill the data for  <city>', async function () {
    await loginPage.typeCity("Mex");
  });
  Given('fill the data for  <state>', async function () {
    await loginPage.typeState("Mex");
  });
  Given('fill the data for  <postalCode>', async function () {
    await loginPage.typePostalCode("11840");
  });
  Given('fill the data for  <country>', async function () {
    await loginPage.typeCountry("MEXICO");
  });
  Given('fill the data for  <userName>', async function () {
    await loginPage.typeEmail("luannna");
  });
  Given('fill the data for  <password>', async function () {
    await loginPage.typePassword("1234567");
  });
  Given('fill the data for  <confirmPassword>', async function () {
    await loginPage.typeConfirmPassword("1234567");
  });
  When('the user click on submit', async function () {
    await loginPage.submitButton().click()
});




