const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const flights = require("../../page_objects/flights.js");
const loginPage = require("../../page_objects/login.js");

// -----------------> G I V E N <--------------------- //

// -----------------> W H E N <---------------------- //

When("the user clicks the Flights button on the side menu", async function () {
	await flights.flightsButton().click();
});

// -----------------> T H E N <---------------------- //

Then("the website shows the Flights page", async function () {
	const actualTitle = await flights.getActualTitle();
	const expectedTitle = "Find a Flight: Mercury Tours:";

	assert.equal(actualTitle, expectedTitle, "an unexpected title was displayed");
});
