const {By} = require('selenium-webdriver');

module.exports = {
    setUserName: (username) => {
        driver.findElement(By.name('userName')).sendKeys(username)
    },
    setPassword: (password) => {
        driver.findElement(By.name('password')).sendKeys(password)
    },
    clickSubmit: () => {
        driver.findElement(By.name('submit')).click()
    },
    loginMessageTitle: () => {
        driver.findElement(By.css('td>table>tbody>tr>td>h3'))
    },
    loginMessageDescription: () => {
        driver.findElement(By.css('tr>td>p>font>b'))
    },
    currentUrl: () => {
        driver.getCurrentUrl()
    }
}