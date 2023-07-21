import { dates } from "./utils";
import { getWeatherIcon } from "./utils";

function showWeather(weather) {
  // Displays today's weather

  const currentTemp = document.querySelector(".current-temperature");
  const location = document.querySelector(".location");
  const currentCondition = document.querySelector(".current-condition");
  const todayMax = document.querySelector(".today-max");
  const todayMin = document.querySelector(".today-min");
  const perceivedTemperature = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const rain = document.querySelector(".rain");
  const wind = document.querySelector(".wind");
  const todayDate = document.querySelector(".today-date");
  const currentWeatherIcon = document.querySelector(".weather-icon");

  // Main info

  location.textContent = weather.location.name;
  todayDate.textContent = dates[0];
  currentTemp.textContent = `${weather.current.temp_c}º`;
  currentWeatherIcon.src = getWeatherIcon(
    weather.current.condition.code,
    weather.current.is_day
  );
  currentCondition.textContent = weather.current.condition.text;
  todayMax.textContent = `${weather.forecast.forecastday[0].day.maxtemp_c}º`;
  todayMin.textContent = `${weather.forecast.forecastday[0].day.mintemp_c}º`;

  // Extra info

  perceivedTemperature.textContent = `${weather.current.feelslike_c}º`;
  humidity.textContent = `${weather.current.humidity}%`;
  rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  wind.textContent = `${weather.current.wind_kph} km/h ${weather.current.wind_dir}`;

  // Displays future days weather

  const futureWeatherConditions = document.querySelectorAll(
    ".future-weather-condition"
  );
  const futureTemperatures = document.querySelectorAll(".future-temperature");
  const futureWeatherIcons = document.querySelectorAll(".future-weather-icon");
  const futureDates = document.querySelectorAll(".future-date");

  futureDates.forEach(
    (futureDate, i) => (futureDate.textContent = dates[i + 1])
  );
  futureWeatherConditions.forEach(
    (futureWeatherCondition, i) =>
      (futureWeatherCondition.textContent =
        weather.forecast.forecastday[i + 1].day.condition.text)
  );
  futureTemperatures.forEach(
    (futureTemperature, i) =>
      (futureTemperature.textContent = `${
        weather.forecast.forecastday[i + 1].day.mintemp_c
      }º - ${weather.forecast.forecastday[i + 1].day.maxtemp_c}º`)
  );
  futureWeatherIcons.forEach(
    (futureWeatherIcon, i) =>
      (futureWeatherIcon.src = getWeatherIcon(
        weather.forecast.forecastday[i + 1].day.condition.code,
        1
      ))
  );
}

function celsiusToFarenheit(weather) {
  const currentTemp = document.querySelector(".current-temperature");
  const todayMax = document.querySelector(".today-max");
  const todayMin = document.querySelector(".today-min");
  const perceivedTemperature = document.querySelector(".feels-like");
  const wind = document.querySelector(".wind");
  const futureTemperatures = document.querySelectorAll(".future-temperature");

  const convertFromCelsius = (temp) => temp * 9/5 + 32;


  console.log(todayMax.textContent, todayMin, currentTemp);
  
  // todayMax.textContent = `${weather.forecast.forecastday[0].day.maxtemp_f}º`;
  // todayMin.textContent = `${weather.forecast.forecastday[0].day.mintemp_f}º`;

  // perceivedTemperature.textContent = `${weather.current.feelslike_f}º`;
  // wind.textContent = `${weather.current.wind_mph} mph`;

  // futureTemperatures.forEach(
  //    (futureTemperature, i) =>
  //     (futureTemperature.textContent = `${
  //       weather.forecast.forecastday[i + 1].day.mintemp_f
  //      }º - ${weather.forecast.forecastday[i + 1].day.maxtemp_f}º`)
  //  );
}

export { showWeather, celsiusToFarenheit };
