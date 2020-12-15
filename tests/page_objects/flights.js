const { By } = require("selenium-webdriver");

module.exports = {
	getActualTitle: () => {
		return driver.getTitle();
	},

	flightsButton: () => {
		return driver.findElement(By.linkText("Flights"));
	},
};
