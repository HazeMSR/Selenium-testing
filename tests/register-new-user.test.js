
// Sebastian M Gzz

// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('failed_login', function() {
  this.timeout(30000)
  let driver
  let vars

  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })

  it('register', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/register.php")
    await driver.manage().window().setRect(1440, 1080)

    let data = {
      firstName: "Sebastian",
      lastName: "M Gzz",
      phone: "6374829",
      address1: "dir",
      city: "Monterrey",
      state: "NL",
      postalCode: "12345",
      email: "lol@gmail.com",
      password: "contraseña",
      confirmPassword: "contraseña"
    }
    for(let key in data) {
      await driver.findElement(By.name(key)).click()
      await driver.findElement(By.name(key)).sendKeys(data[key])
    }
    await driver.findElement(By.name("submit")).click()

  })

})