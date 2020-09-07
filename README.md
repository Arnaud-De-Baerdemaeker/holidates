# holidates

Hello ! Thank you for downloading my holidates tool :)

## What is it ?

holidates is a tool I created during my formation in web development at BeCode Liège, Belgium.
It will allow you to display a list of holidays of the current year for the country name you will enter.
<br>
## How it works ?

1. You enter the name of a country in english, then
2. it checks with the [country-list](https://www.npmjs.com/package/country-list) package that the country name entered is correct and supported by the API,
3. converts the country name into its country code,
4. makes an HTTP request to the API of the [nager.date](https://date.nager.at/) service,
5. retrieves the holidays data of the chosen country,
6. transform the data into a readable and understandable list (date : holiday)

## How to install it ?

You can install it using npm :

```
npm install @ptit-naud/holidates
```

## Version

1.0.0

###### Keywords

countries holidays