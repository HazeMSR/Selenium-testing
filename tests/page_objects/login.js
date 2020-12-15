const { By } = require("selenium-webdriver");

module.exports = {
	username: () => {
		return driver.findElement(By.name("userName"));
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

	getActualTitle: () => {
		return driver.getTitle();
	},

	logoutButton: () => {
		return driver.findElement(By.linkText("SIGN-OFF"));
	},

	successLoginMessage: () => {
		return driver.findElement(
			By.xpath("//h3[contains(text(),'Login Successfully')]")
		);
	},

	typeUsername: async (text) => {
		await driver.wait(() => {
			return driver.findElement(By.name("userName")).isDisplayed();
		}, 15000);

		await driver.findElement(By.name("userName")).sendKeys(text);
	},

	typePassword: async (text) => {
		await driver.wait(() => {
			return driver.findElement(By.name("password")).isDisplayed();
		}, 15000);

		await driver.findElement(By.name("password")).sendKeys(text);
	},
};
