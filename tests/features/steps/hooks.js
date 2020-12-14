  
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