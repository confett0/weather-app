import { date } from "./utils";
import Sunny from './images/icons/partly-cloudy.png';
import PartlyCloudy from './images/icons/partly-cloudy.png';

const getWeatherIcon = (code) => {
    
    if (code === 1000) {
        return Sunny;
    }
    if (code === 1003) {
        return PartlyCloudy;
    }
}

function showWeather(weather) {

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

    todayDate.textContent = date.today;

    currentWeatherIcon.src = getWeatherIcon(weather.current.condition.code);

}

export { showWeather };