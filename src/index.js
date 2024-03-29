import "./style.css";
import { getWeather } from "./app";
import { showWeather, celsiusToFahrenheit } from "./ui";

async function displayWeather(city) {
  const weatherData = await getWeather(city);
  showWeather(weatherData);
}

const cityInput = document.querySelector("#search");
cityInput.addEventListener("change", () => displayWeather(cityInput.value));

const celsiusToFarenheitToggle = document.querySelector("#toggle");
celsiusToFarenheitToggle.addEventListener("change", celsiusToFahrenheit);

displayWeather("london");
