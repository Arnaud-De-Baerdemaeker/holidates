#!/usr/bin/env node

let arguments = process.argv;
let date = new Date();
let year = date.getFullYear();
const {getCode} = require("country-list");
const axios = require("axios").default;

async function getHolidays(year, countryCode)
{
	try
	{
		const response = await axios.get("https://date.nager.at/Api/v2/PublicHolidays/" + year + "/" + countryCode);
		
		console.log("Here is the list of the holidays for " + year + " : ");
		
		for (let holiday of response.data)
		{
			console.log(holiday.date + ", " + holiday.name);
		}
		
	}
	catch
	{
		console.log("Oops ! I encountered an error !");
	}
}

if (getCode(arguments[2]))
{
	let countryCode = getCode(arguments[2]);
	console.log("The country code for " + arguments[2] + " is : " + countryCode + ".");

	getHolidays(year, countryCode)
}
else
{
	console.log("I encountered an error ! It may be because there was a typo in the country name, or, sadly, the country you entered is not registered in the API :(");
}