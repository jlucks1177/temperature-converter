function convertToCelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

function describeTemperature(farenheit) {
  const celsius = convertToCelsius(farenheit);
  let description;

  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else if (celsius >= 40) {
    description = "very hot";
  }

  return `Wow! ${farenheit} farenheit is ${celsius} celsius, it is ${description}! That's wild!`;
}

const farenheit = prompt("Farenheit:");
const description = describeTemperature(farenheit);
alert(description);
