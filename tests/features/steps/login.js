const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const loginPage = require("../../page_objects/login.js");

// -----------------> G I V E N <--------------------- //

Given("the credentials are incorrect", async function () {
	await loginPage.typeUsername("test@example.com");
	await loginPage.typePassword("wrongPassword");
});

Given("the user navigates to the website", async function () {
	const actualTitle = await loginPage.getActualTitle();
	const expectedTitle = "Welcome: Mercury Tours";

	assert.equal(actualTitle, expectedTitle, "an unexpected title was displayed");
});

Given("the user is logged in with an account", async function () {
	await loginPage.typeUsername("admin");
	await loginPage.typePassword("admin");
	await loginPage.submitButton().click();
});

// -----------------> W H E N <---------------------- //

When("the user attempts to log in", async function () {
	await loginPage.submitButton().click();
});

When(
	"the user enters a valid username",
	{ timeout: 2 * 5000 },
	async function () {
		await loginPage.typeUsername("jhberner0");
	}
);

When("clicks on Submit button", async function () {
	await loginPage.submitButton().click();
});

When("the user clicks the SIGN-OFF button", async function () {
	await loginPage.logoutButton().click();
});

// NO FUNCIONA
//When('^the user enters ([^"]*) as username$', async function () {
//	await loginPage.typeUsername();
//});
//
//When("the user enters <pass> as password", async function (pass) {
//	await loginPage.typePassword(pass);
//});

// -----------------> T H E N <---------------------- //

Then("an error message is displayed", async function () {
	await driver.wait(() => {
		return loginPage.loginMessage().isDisplayed();
	}, 15000);

	const actualMessage = await loginPage.loginMessage().getText();
	const expectedMessage = "Enter your userName and password correct";

	assert.equal(
		actualMessage,
		expectedMessage,
		"an unexpected message was displayed"
	);
});

Then("a success message is displayed", async function () {
	await driver.wait(() => {
		return loginPage.successLoginMessage().isDisplayed();
	}, 15000);

	const actualMessage = await loginPage.successLoginMessage().getText();
	const expectedMessage = "Login Successfully";

	assert.equal(
		actualMessage,
		expectedMessage,
		"an unexpected message was displayed"
	);
});

Then("the website shows the home page", async function () {
	const actualTitle = await loginPage.getActualTitle();
	const expectedTitle = "Welcome: Mercury Tours";

	assert.equal(actualTitle, expectedTitle, "an unexpected title was displayed");
});
