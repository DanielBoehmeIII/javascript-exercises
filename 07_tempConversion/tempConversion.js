const convertToCelsius = function(degreesInFarenheit) {
  let result = (degreesInFarenheit - 32) * (5/9);
  result = result * 10;
  result = Math.round(result) / 10;
  return result;
};

const convertToFahrenheit = function(degreesInCelcius) {
  let result = (degreesInCelcius * (9/5)) + 32;
  result = result * 10;
  result = Math.round(result) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
