const roundToOneDecimal = function(num) {
  return Math.round(num*10)/10;
}

const convertToCelsius = function(fTemp) {
  return roundToOneDecimal((fTemp - 32) * 5/9);
};

const convertToFahrenheit = function(cTemp) {
  return roundToOneDecimal(cTemp*9/5+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
