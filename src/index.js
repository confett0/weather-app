import './style.css';
import { getWeather } from './app';
import { showWeather } from './ui';


async function displayDefault() {
    const weatherData = await getWeather('strasbourg');
    showWeather(weatherData);
}

displayDefault();