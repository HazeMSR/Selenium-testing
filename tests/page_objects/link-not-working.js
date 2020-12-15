const { By } = require('selenium-webdriver')

module.exports = {
    
    home:() => {
        driver.get("http://demo.guru99.com/test/newtours/")
        driver.manage().window().setRect(1440, 1080)
    },

    button: () => {
        return driver.findElement(By.xpath("/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[3]/form/table/tbody/tr[12]/td/table/tbody/tr/td/font/a[1]")).click();
        
    },

    page_not: async () => {
        const message = await driver.wait(until.elementLocated(By.xpath("/html/body/h1")), 1500);
        const actualMessage = await message.getText();
        const expectedMessage = "Not Found";
        assert.equal(actualMessage, expectedMessage, "Incorrect Message");
    }


}//End of module exports

