const convertToCelsius = function(toCelsius) {
  let celsiusFormula = (toCelsius - 32) * 5/9;
  let totalCelsius = Math.round(celsiusFormula *10) / 10;
  return totalCelsius;
};

const convertToFahrenheit = function(toFahrenheit) {
  let fahrenheitFormula = (toFahrenheit * 1.8) + 32;
  let totalFahrenheit = Math.round(fahrenheitFormula *10) / 10;
  return totalFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
