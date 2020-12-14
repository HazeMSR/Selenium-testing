const { By } = require('selenium-webdriver')

module.exports = {
    email: () => {
        return driver.findElement(By.name("email"));
    },

    password: () => {
        return driver.findElement(By.name("password"));
    },

    submitButton: () => {
        return driver.findElement(By.name("submit"));
    },

    loginMessage: () => {
        return driver.findElement(By.tagName("span"));
    },
    
    typeEmail: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("email")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("email")).sendKeys(text);
    },

    typePassword: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("password")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("password")).sendKeys(text);
    }
}