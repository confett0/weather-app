function showWeather(weather) {

    const todayTemp = document.querySelector(".today-temperature");
    const location = document.querySelector(".location");
    const todayCondition = document.querySelector(".today-condition");
    const perceivedTemperature = document.querySelector(".feels-like");
    const humidity = document.querySelector(".humidity");
    const rain = document.querySelector(".rain");
    const wind = document.querySelector(".wind");

    todayTemp.textContent = `${weather.current.temp_c} ºC`;
    location.textContent = weather.location.name;
    todayCondition.textContent = weather.current.condition.text;
    perceivedTemperature.textContent = `${weather.current.feelslike_c} ºC`;
    humidity.textContent = `${weather.current.humidity}%;`;
    rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    wind.textContent = `${weather.current.wind_kph} km/h`;

}

export { showWeather };