// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('All_tests', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('failed_login', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/")
    await driver.manage().window().setRect(936, 517)
    await driver.findElement(By.name("userName")).click()
    await driver.findElement(By.name("userName")).sendKeys("false_user")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("password")
    await driver.findElement(By.name("submit")).click()
    await driver.findElement(By.css("span")).click()
  })
  it('failed_registration', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(936, 517)
    await driver.findElement(By.linkText("REGISTER")).click()
    await driver.findElement(By.name("submit")).click()
    {
      const elements = await driver.findElements(By.css("p:nth-child(2) > font"))
      assert(!elements.length)
    }
  })
  it('failed_registration_if_no_password_and_password_confirmation_is_given', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(936, 517)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("user")
    await driver.findElement(By.name("submit")).click()
    {
      const elements = await driver.findElements(By.css("p:nth-child(2) > font"))
      assert(!elements.length)
    }
  })
  it('failed_registration_if_no_user_given', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(936, 345)
    await driver.findElement(By.linkText("REGISTER")).click()
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("password")
    await driver.findElement(By.name("confirmPassword")).sendKeys("password")
    await driver.findElement(By.name("submit")).click()
    {
      const elements = await driver.findElements(By.css("p:nth-child(2) > font"))
      assert(!elements.length)
    }
  })
  it('successful_login', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/")
    await driver.manage().window().setRect(936, 517)
    await driver.findElement(By.linkText("REGISTER")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("user")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("password")
    await driver.findElement(By.name("confirmPassword")).click()
    await driver.findElement(By.name("confirmPassword")).sendKeys("password")
    await driver.findElement(By.name("submit")).click()
    await driver.findElement(By.linkText("Home")).click()
    await driver.findElement(By.name("userName")).click()
    await driver.findElement(By.name("userName")).sendKeys("user")
    await driver.findElement(By.name("password")).sendKeys("password")
    await driver.findElement(By.name("submit")).click()
    await driver.findElement(By.css("font > b")).click()
    await driver.findElement(By.css("td td:nth-child(2) tr:nth-child(3) > td")).click()
  })
  it('successful_registration', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(936, 517)
    await driver.findElement(By.linkText("REGISTER")).click()
    await driver.findElement(By.name("firstName")).click()
    await driver.findElement(By.name("firstName")).sendKeys("User")
    await driver.findElement(By.name("lastName")).sendKeys("Last Name")
    await driver.findElement(By.name("phone")).sendKeys("1234567890")
    await driver.findElement(By.id("userName")).sendKeys("email@email.com")
    await driver.findElement(By.name("address1")).sendKeys("adress")
    await driver.findElement(By.name("city")).sendKeys("city")
    await driver.findElement(By.name("state")).sendKeys("state")
    await driver.findElement(By.name("postalCode")).sendKeys("00000")
    {
      const dropdown = await driver.findElement(By.name("country"))
      await dropdown.findElement(By.xpath("//option[. = 'MACAU']")).click()
    }
    {
      const dropdown = await driver.findElement(By.name("country"))
      await dropdown.findElement(By.xpath("//option[. = 'MEXICO']")).click()
    }
    await driver.findElement(By.id("email")).sendKeys("user")
    await driver.findElement(By.name("password")).sendKeys("password")
    await driver.findElement(By.name("confirmPassword")).sendKeys("password")
    await driver.findElement(By.name("submit")).click()
    {
      const elements = await driver.findElements(By.css("p:nth-child(2) > font"))
      assert(elements.length)
    }
  })
})
