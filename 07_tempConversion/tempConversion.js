const convertToCelsius = function(faTemp) {
  return Math.round(((faTemp - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(ceTemp) {
  return Math.round((ceTemp * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
