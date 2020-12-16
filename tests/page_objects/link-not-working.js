const { By } = require('selenium-webdriver')

module.exports = {
    broken_link: () => {
        return driver.findElement(By.xpath("/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[3]/form/table/tbody/tr[12]/td/table/tbody/tr/td/font/a[1]"));
    },
    
    page_not: async function (){
        const message = await driver.wait(until.elementLocated(By.xpath("/html/body/h1")), 1500);
        const actualMessage = await message.getText();
        const expectedMessage = "Not Found";
        assert.equal(actualMessage, expectedMessage, "Incorrect Message");
    }


}//End of module exports

