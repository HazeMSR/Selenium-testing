// Generated by Selenium IDE
const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver')
const assert = require('assert')

const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

describe('testcase17', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('testcase17', async function () {
        await driver.get("http://demo.guru99.com/test/newtours/")
        await driver.manage().window().setRect(806, 668)
        await driver.findElement(By.linkText("REGISTER")).click()
        await driver.findElement(By.name("firstName")).click()
        await driver.findElement(By.name("firstName")).sendKeys("Jilana")
        await driver.findElement(By.name("lastName")).click()
        await driver.findElement(By.name("lastName")).sendKeys("Hebner")
        await driver.findElement(By.name("phone")).click()
        await driver.findElement(By.name("phone")).sendKeys("8042829958")
        await driver.findElement(By.id("userName")).click()
        await driver.findElement(By.id("userName")).sendKeys("jhebner0@furl.net")
        await driver.findElement(By.name("address1")).click()
        await driver.findElement(By.name("address1")).sendKeys("0 Kenwood Pass")
        await driver.findElement(By.name("city")).click()
        await driver.findElement(By.name("city")).sendKeys("Richmond")
        await driver.findElement(By.name("state")).click()
        await driver.findElement(By.name("state")).sendKeys("Virginia")
        await driver.findElement(By.name("postalCode")).click()
        await driver.findElement(By.name("postalCode")).sendKeys("23289")
        await driver.findElement(By.name("country")).click() {
            const dropdown = await driver.findElement(By.name("country"))
            await dropdown.findElement(By.xpath("//option[. = 'UNITED STATES']")).click()
        }
        await driver.findElement(By.name("country")).click()
        await driver.findElement(By.id("email")).click()
        await driver.findElement(By.id("email")).sendKeys("jhebner0")
        await driver.findElement(By.name("password")).click()
        await driver.findElement(By.name("password")).sendKeys("az5Ux3MK")
        await driver.findElement(By.name("confirmPassword")).click()
        await driver.findElement(By.name("confirmPassword")).sendKeys("az5Ux3MK")
        await driver.findElement(By.name("submit")).click()
    })
})