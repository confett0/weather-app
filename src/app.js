
async function getWeather(city) {
     const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6c5e8ef93bf8482d940131042233003&q=${city}`);
     const weatherData = await response.json();
     console.log(weatherData);
     return weatherData;
 }


export { getWeather };