import "./style.css";
import { getWeather } from "./app";
import { showWeather, celsiusToFarenheit } from "./ui";

async function displayWeather(city) {
  const weatherData = await getWeather(city);
  showWeather(weatherData);
}

const cityInput = document.querySelector("#search");
cityInput.addEventListener("change", () => displayWeather(input.value));

const celsiusToFarenheitToggle = document.querySelector("#toggle");
celsiusToFarenheitToggle.addEventListener("change", celsiusToFarenheit);

displayWeather("london");
