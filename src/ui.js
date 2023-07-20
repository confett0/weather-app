import { dates } from "./utils";
import { getWeatherIcon } from "./utils";

function showWeather(weather) {

    // Display today weather

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
    const currentWeatherIcon = document.querySelector('.weather-icon');

    currentTemp.textContent = `${weather.current.temp_c}º`;
    location.textContent = weather.location.name;
    currentCondition.textContent = weather.current.condition.text;
    todayMax.textContent = `${weather.forecast.forecastday[0].day.maxtemp_c}º`;
    todayMin.textContent = `${weather.forecast.forecastday[0].day.mintemp_c}º`;
    perceivedTemperature.textContent = `${weather.current.feelslike_c}º`;
    humidity.textContent = `${weather.current.humidity}%`;
    rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    wind.textContent = `${weather.current.wind_kph} km/h`;

    todayDate.textContent = dates[0];

    currentWeatherIcon.src = getWeatherIcon(weather.current.condition.code, weather.current.is_day);

    // Display future days weather

    const futureWeatherCondition = document.querySelectorAll(".future-weather-condition");
    const futureTemperature = document.querySelectorAll(".future-temperature");
    const futureWeatherIcon = document.querySelectorAll(".future-weather-icon");
    const tomorrow = document.querySelector(".tomorrow");
    const dayAfterAfternoon = document.querySelector(".day-after-tomorrow");

    tomorrow.textContent = dates[1];
    dayAfterAfternoon.textContent = dates[2];

    for (let i = 0; i < futureWeatherCondition.length; i++) {
        futureWeatherCondition[i].textContent = weather.forecast.forecastday[i + 1].day.condition.text;
        futureTemperature[i].textContent = `${weather.forecast.forecastday[i + 1].day.mintemp_c}º - ${weather.forecast.forecastday[i + 1].day.maxtemp_c}º`;
        futureWeatherIcon[i].src = getWeatherIcon(weather.forecast.forecastday[i + 1].day.condition.code, 1);
    }


}

export { showWeather };