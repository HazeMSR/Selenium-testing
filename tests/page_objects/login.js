const {By} = require('selenium-webdriver');

module.exports = {
    userName: () => {
        driver.findElement(By.name('userName'))
    },
    password: () => {
        driver.findElement(By.name('password'))
    },
    submit: () => {
        driver.findElement(By.name('submit'))
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