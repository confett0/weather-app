import { getWeather } from './app';
import './style.css';
import { showWeather } from './ui';


async function displayDefault() {
    const weatherData = await getWeather('strasbourg');
    showWeather(weatherData);
}

displayDefault();