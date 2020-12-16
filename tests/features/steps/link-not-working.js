const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const link_Page = require('../../page_objects/link-not-working.js');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const { Builder } = require('selenium-webdriver')
const { Before, After } = require('@cucumber/cucumber');
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

Before(async () => {
    global.driver = await new Builder().forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()

    await driver.get("http://demo.guru99.com/test/newtours/")
    await driver.manage().window().setRect(1440, 1080)
   
});

After(async () => {
    driver.quit();
});

// Given -----------------------------------------------------------
Given("the user clicks on the link", async function(){
    await link_Page.broken_link().click();
});//End of Given

//Then --------------------------------------------------------------
Then("Error in page", async function(){
    await link_Page.page_not();

});//End of then






