import "./style.css";
import { getWeather } from "./app";
import { showWeather } from "./ui";

async function displayWeather(city) {
  const weatherData = await getWeather(city);
  showWeather(weatherData);
}

const input = document.querySelector("#search");
input.addEventListener("change", () => displayWeather(input.value));

displayWeather("london");
