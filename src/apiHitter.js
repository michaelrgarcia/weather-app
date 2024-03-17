import processWeatherInfo from "./jsonHandler";
import {
  showLoadingScreen,
  showInfoScreen,
  showErrorScreen,
} from "./pageTransitions";

const apiKey = "e019046cf3bf441f9f8194316240203";
const url = "https://api.weatherapi.com/v1/current.json";

function weatherError(json) {
  if (json.error) {
    return true;
  }
  return false;
}

export default async function getWeatherInfo(value) {
  const userInput = value;
  const newUrl = `${url}?key=${apiKey}&q=${userInput}`;

  showLoadingScreen();

  const response = await fetch(newUrl, { mode: "cors" });
  const jsonData = await response.json();

  const errors = weatherError(jsonData);

  if (!errors) {
    processWeatherInfo(jsonData);
    showInfoScreen();
  } else {
    showErrorScreen();
  }
}
