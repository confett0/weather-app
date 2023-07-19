import './style.css';
import { getWeather } from './app';
import { showWeather } from './ui';


async function displayDefault() {
    const weatherData = await getWeather('milan');
    showWeather(weatherData);
}

displayDefault();