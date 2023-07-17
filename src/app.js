

async function getWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=6c5e8ef93bf8482d940131042233003&q=london");
    const weatherData = await response.json();
    console.log(weatherData.current.condition.text);
}

getWeather();