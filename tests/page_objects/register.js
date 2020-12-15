const { By } = require("selenium-webdriver");

module.exports = {
	registerButton: () => {
		return driver.findElement(By.linkText("REGISTER"));
	},

	firstName: () => {
		return driver.findElement(By.name("firstName"));
	},

	lastName: () => {
		return driver.findElement(By.name("lastName"));
	},

	phone: () => {
		return driver.findElement(By.css("phone"));
	},

	email: () => {
		return driver.findElement(By.id("email"));
	},

	address: () => {
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

	userName: () => {
		return driver.findElement(By.id("userName"));
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

	registrationMessage: () => {
		return driver.findElement(By.xpath("//tbody/tr[3]/td[1]/p[2]/font[1]"));
	},

	typeFirstName: async (text) => {
		const firstName = driver.findElement(By.name("firstName"));
		await driver.wait(() => {
			return firstName.isDisplayed();
		}, 15000);

		await firstName.sendKeys(text);
	},

	typeLastName: async (text) => {
		const lastName = driver.findElement(By.name("lastName"));
		await driver.wait(() => {
			return lastName.isDisplayed();
		}, 15000);

		await lastName.sendKeys(text);
	},

	typePhone: async (text) => {
		const phone = driver.findElement(By.name("phone"));
		await driver.wait(() => {
			return phone.isDisplayed();
		}, 15000);

		await phone.sendKeys(text);
	},

	typeEmail: async (text) => {
		const email = driver.findElement(By.name("email"));
		await driver.wait(() => {
			return email.isDisplayed();
		}, 15000);

		await email.sendKeys(text);
	},

	typeAddress: async (text) => {
		const address = driver.findElement(By.name("address1"));
		await driver.wait(() => {
			return address.isDisplayed();
		}, 15000);

		await address.sendKeys(text);
	},

	typeCity: async (text) => {
		const city = driver.findElement(By.name("city"));
		await driver.wait(() => {
			return city.isDisplayed();
		}, 15000);

		await city.sendKeys(text);
	},

	typeState: async (text) => {
		const state = driver.findElement(By.name("state"));
		await driver.wait(() => {
			return state.isDisplayed();
		}, 15000);

		await state.sendKeys(text);
	},

	typePostalCode: async (text) => {
		const postalCode = driver.findElement(By.name("postalCode"));
		await driver.wait(() => {
			return postalCode.isDisplayed();
		}, 15000);

		await postalCode.sendKeys(text);
	},

	selectCountry: async (text) => {
		const country = driver.findElement(By.name("country"));
		await driver.wait(() => {
			return country.isDisplayed();
		}, 15000);

		await country.click();
		{
			const dropdown = await driver.findElement(By.name("country"));
			await dropdown
				.findElement(By.xpath("//option[. = 'UNITED STATES']"))
				.click();
		}
		await driver.findElement(By.name("country")).click();
	},

	typeUserName: async (text) => {
		const userName = driver.findElement(By.name("userName"));
		await driver.wait(() => {
			return userName.isDisplayed();
		}, 15000);

		await userName.sendKeys(text);
	},

	typePassword: async (text) => {
		const password = driver.findElement(By.name("password"));
		await driver.wait(() => {
			return password.isDisplayed();
		}, 15000);

		await password.sendKeys(text);
	},

	typeConfirmPassword: async (text) => {
		const confirmPassword = driver.findElement(By.name("confirmPassword"));
		await driver.wait(() => {
			return confirmPassword.isDisplayed();
		}, 15000);

		await confirmPassword.sendKeys(text);
	},
};
