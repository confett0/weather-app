import { date } from "./utils";

function showWeather(weather) {

    const todayTemp = document.querySelector(".current-temperature");
    const location = document.querySelector(".location");
    const todayCondition = document.querySelector(".current-condition");
    const perceivedTemperature = document.querySelector(".feels-like");
    const humidity = document.querySelector(".humidity");
    const rain = document.querySelector(".rain");
    const wind = document.querySelector(".wind");
    const todayDate = document.querySelector(".today-date");

    todayTemp.textContent = `${weather.current.temp_c}º`;
    location.textContent = weather.location.name;
    todayCondition.textContent = weather.current.condition.text;
    perceivedTemperature.textContent = `${weather.current.feelslike_c}º`;
    humidity.textContent = `${weather.current.humidity}%;`;
    rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    wind.textContent = `${weather.current.wind_kph} km/h`;

    todayDate.textContent = date.today;

}

export { showWeather };