const { By } = require('selenium-webdriver')

module.exports = {
    firstName: () => {
        return driver.findElement(By.name("firstName"));
    },

    lastName: () => {
        return driver.findElement(By.name("lastName"));
    },
    phone: () => {
        return driver.findElement(By.name("phone"));
    },

    address1: () => {
        return driver.findElement(By.name("address1"));
    },
    city: () => {
        return driver.findElement(By.name("city"));
    },

    state: () => {
        return driver.findElement(By.name("state"));
    },
    postalCode: () => {
        return driver.findElement(By.name("postalCode"));
    },

    country: () => {
        return driver.findElement(By.name("country"));
    },
    email: () => {
        return driver.findElement(By.name("email"));
    },

    password: () => {
        return driver.findElement(By.name("password"));
    },
    confirmPassword: () => {
        return driver.findElement(By.name("confirmPassword"));
    },
    submitButton: () => {
        return driver.findElement(By.name("submit"));
    },

    loginMessage: () => {
        return driver.findElement(By.tagName("span"));
    },
    
    typeFirstName: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("firstName")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("firstName")).sendKeys(text);
    },

    typeLastName: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("lastName")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("lastName")).sendKeys(text);
    },
    typePhone: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("phone")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("phone")).sendKeys(text);
    },
    typeAddress1: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("address1")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("address1")).sendKeys(text);
    },
    typeCity: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("city")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("city")).sendKeys(text);
    },
    typeState: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("state")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("state")).sendKeys(text);
    },
    typePostalCode: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("postalCode")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("postalCode")).sendKeys(text);
    },
    typeCountry: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("country")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("country")).sendKeys(text);
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
    },
    typeConfirmPassword: async (text) => {
        await driver.wait(() => {
          return driver.findElement(By.name("confirmPassword")).isDisplayed();
        }, 15000);

        await driver.findElement(By.name("confirmPassword")).sendKeys(text);
    }
    
}