#! /usr/bin/cnv node  
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    PKR: 277.30, //Pakistan Currency
    JPY: 153.28, // Japanese currency
    SAR: 3.75, //Saudi Arabia currency
    CNY: 7.24, //Chinese currency
    AFN: 71.18, //Afghanistan currency
    IQD: 1306.82, //Iraq currency
    IRR: 42075.00, //Iran currency
    GBP: 0.80, //Pound currency
    INR: 83.61, //India currency
    EUR: 0.94, //Euro currency
};
let Currency = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "PKR", "JPY", "SAR", "CNY", "AFN", "IQD", "IRR", "GBP", "INR", "EUR",]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "PKR", "JPY", "SAR", "CNY", "AFN", "IQD", "IRR", "GBP", "INR", "EUR",]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromCurrency = currency[Currency.from];
let toCurrency = currency[Currency.to];
let amount = Currency.amount;
let baseAmount = amount / fromCurrency;
let Convert = baseAmount * toCurrency;
console.log(Convert);
