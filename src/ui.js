function showWeather(weather) {

    const todayTemp = document.querySelector(".today-temperature");
    const location = document.querySelector(".location");
    const todayCondition = document.querySelector(".today-condition");

    todayTemp.textContent = `${weather.current.temp_c} ºC`;
    location.textContent = weather.location.name;
    todayCondition.textContent = weather.current.condition.text;
}

export { showWeather };