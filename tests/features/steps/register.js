const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const register = require("../../page_objects/register.js");

// -----------------> G I V E N <--------------------- //

Given("the user navigates to the REGISTER section", async function () {
	await register.registerButton().click();
});

// -----------------> W H E N <---------------------- //

When("the user fills the form with valid data", async function () {
	await register.typeFirstName("Jilana");
	await register.typeLastName("Hebner");
	await register.typePhone("8042829958");
	await register.typeEmail("jhebner0@furl.net");
	await register.typeAddress("0 Kenwood Pass");
	await register.typeCity("Richmond");
	await register.typeState("Virginia");
	await register.typePostalCode("23289");
	await register.selectCountry("UNITED STATES");
	await register.typeUserName("jhebner0");
	await register.typePassword("az5Ux3MK");
	await register.typeConfirmPassword("az5Ux3MK");
});

When("clicks on the Send button", async function () {
	await register.submitButton().click();
});

// -----------------> T H E N <---------------------- //

Then("a verification message is displayed", async function () {
	await driver.wait(() => {
		return register.registrationMessage().isDisplayed();
	}, 15000);

	const actualMessage = await register.registrationMessage().getText();
	const expectedMessage =
		"Thank you for registering. You may now sign-in using the user name and password you've just entered.";

	assert.equal(
		actualMessage,
		expectedMessage,
		"an unexpected message was displayed"
	);
});
