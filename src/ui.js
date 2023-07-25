import { dates } from "./utils";
import { getWeatherIcon } from "./utils";

const currentTemp = document.querySelector(".current-temperature");
const todayMax = document.querySelector(".today-max");
const todayMin = document.querySelector(".today-min");
const perceivedTemperature = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const windUnit = document.querySelector(".wind-speed-unit");
const futureTemperaturesMin = document.querySelectorAll(".future-temp-min");
const futureTemperaturesMax = document.querySelectorAll(".future-temp-max");
const celsiusToFarenheitToggle = document.querySelector("#toggle");

function showWeather(weather) {
  const location = document.querySelector(".location");
  const currentCondition = document.querySelector(".current-condition");
  const humidity = document.querySelector(".humidity");
  const rain = document.querySelector(".rain");
  const todayDate = document.querySelector(".today-date");
  const currentWeatherIcon = document.querySelector(".weather-icon");
  const futureWeatherConditions = document.querySelectorAll(
    ".future-weather-condition"
  );
  const futureWeatherIcons = document.querySelectorAll(".future-weather-icon");
  const futureDates = document.querySelectorAll(".future-date");

  // Displays darker background if it's nighttime

  if (weather.current.is_day === 0) {
    document.body.style.background =
      "linear-gradient(135deg, #7F91DE 0%, #081334 100%)";
  }

  // Displays temperature and wind according to user's unit of choice

  if (!celsiusToFarenheitToggle.checked) {
    currentTemp.textContent = Math.round(weather.current.temp_c);
    todayMax.textContent = Math.round(
      weather.forecast.forecastday[0].day.maxtemp_c
    );
    todayMin.textContent = Math.round(
      weather.forecast.forecastday[0].day.mintemp_c
    );
    perceivedTemperature.textContent = Math.round(weather.current.feelslike_c);
    wind.textContent = weather.current.wind_kph;
    windUnit.textContent = "km/h";

    futureTemperaturesMin.forEach(
      (futureTemperatureMin, i) =>
        (futureTemperatureMin.textContent = Math.round(
          weather.forecast.forecastday[i + 1].day.mintemp_c
        ))
    );
    futureTemperaturesMax.forEach(
      (futureTemperatureMax, i) =>
        (futureTemperatureMax.textContent = Math.round(
          weather.forecast.forecastday[i + 1].day.maxtemp_c
        ))
    );
  }
  if (celsiusToFarenheitToggle.checked) {
    currentTemp.textContent = Math.round(weather.current.temp_f);
    todayMax.textContent = Math.round(
      weather.forecast.forecastday[0].day.maxtemp_f
    );
    todayMin.textContent = Math.round(
      weather.forecast.forecastday[0].day.mintemp_f
    );
    perceivedTemperature.textContent = Math.round(weather.current.feelslike_f);
    wind.textContent = weather.current.wind_mph;
    windUnit.textContent = "mph";

    futureTemperaturesMin.forEach(
      (futureTemperatureMin, i) =>
        (futureTemperatureMin.textContent = Math.round(
          weather.forecast.forecastday[i + 1].day.mintemp_f
        ))
    );
    futureTemperaturesMax.forEach(
      (futureTemperatureMax, i) =>
        (futureTemperatureMax.textContent = Math.round(
          weather.forecast.forecastday[i + 1].day.maxtemp_f
        ))
    );
  }

  // Displays today's other info

  location.textContent = weather.location.name;
  todayDate.textContent = dates[0];
  currentWeatherIcon.src = getWeatherIcon(
    weather.current.condition.code,
    weather.current.is_day
  );
  currentCondition.textContent = weather.current.condition.text;

  humidity.textContent = `${weather.current.humidity}%`;
  rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;

  // Displays future days other info

  futureDates.forEach(
    (futureDate, i) => (futureDate.textContent = dates[i + 1])
  );
  futureWeatherConditions.forEach(
    (futureWeatherCondition, i) =>
      (futureWeatherCondition.textContent =
        weather.forecast.forecastday[i + 1].day.condition.text)
  );
  futureWeatherIcons.forEach(
    (futureWeatherIcon, i) =>
      (futureWeatherIcon.src = getWeatherIcon(
        weather.forecast.forecastday[i + 1].day.condition.code,
        1
      ))
  );
}

function celsiusToFahrenheit() {

  const convertFromCelsius = (temp) => Math.round((temp * 9) / 5 + 32);
  const convertFromFahrenheit = (temp) => Math.round(((temp - 32) * 5) / 9);
  const convertFromKm = (speed) => Math.round(speed * 0.62137);
  const convertFromMiles = (speed) => Math.round(speed / 0.62137);

  if (celsiusToFarenheitToggle.checked) {
    currentTemp.textContent = convertFromCelsius(currentTemp.textContent);
    todayMax.textContent = convertFromCelsius(todayMax.textContent);
    todayMin.textContent = convertFromCelsius(todayMin.textContent);
    perceivedTemperature.textContent = convertFromCelsius(
      perceivedTemperature.textContent
    );

    futureTemperaturesMin.forEach(
      (futureTemperatureMin) =>
        (futureTemperatureMin.textContent = convertFromCelsius(
          futureTemperatureMin.textContent
        ))
    );
    futureTemperaturesMax.forEach(
      (futureTemperatureMax) =>
        (futureTemperatureMax.textContent = convertFromCelsius(
          futureTemperatureMax.textContent
        ))
    );

    wind.textContent = convertFromKm(wind.textContent);
    windUnit.textContent = "mph";
  }

  if (!celsiusToFarenheitToggle.checked) {
    currentTemp.textContent = convertFromFahrenheit(currentTemp.textContent);
    todayMax.textContent = convertFromFahrenheit(todayMax.textContent);
    todayMin.textContent = convertFromFahrenheit(todayMin.textContent);
    perceivedTemperature.textContent = convertFromFahrenheit(
      perceivedTemperature.textContent
    );

    futureTemperaturesMin.forEach(
      (futureTemperatureMin) =>
        (futureTemperatureMin.textContent = convertFromFahrenheit(
          futureTemperatureMin.textContent
        ))
    );
    futureTemperaturesMax.forEach(
      (futureTemperatureMax) =>
        (futureTemperatureMax.textContent = convertFromFahrenheit(
          futureTemperatureMax.textContent
        ))
    );

    wind.textContent = convertFromMiles(wind.textContent);
    windUnit.textContent = "km/h";
  }
}

export { showWeather, celsiusToFahrenheit };
