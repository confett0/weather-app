import { format, add } from 'date-fns';
import Sunny from './images/icons/sunny.png';
import PartlyCloudy from './images/icons/partly-cloudy.png';
import Cloudy from './images/icons/cloudy.png';
import Fog from './images/icons/fog.png';
import HeavyRain from './images/icons/heavy-rain.png';
import LightRain from './images/icons/light-rain.png';
import RainSnow from './images/icons/rain-snow.png';
import RainThunderstorm from './images/icons/rain-thunderstorm.png';
import SnowBlizzard from './images/icons/snow-blizzard.png';
import Snow from './images/icons/snow.png';
import Thunderstorm from './images/icons/thunderstorm.png';
import Clear from './images/icons/night-clear.png';
import NightLightRain from './images/icons/night-light-rain.png';
import NightFog from './images/icons/night-fog.png';
import NightHeavySnow from './images/icons/night-heavy-snow.png';
import NightPartlyCloudy from './images/icons/night-partly-cloudy.png';
import NightRain from './images/icons/night-rain.png';
import NightSnow from './images/icons/night-snow.png';
import NightThunderstorm from './images/icons/night-thunderstorm.png';

const getWeatherIcon = (code, isDay) => {
    if (isDay === 1) {
        switch (code) {
            case 1000:
                return Sunny;
            case 1003:
                return PartlyCloudy;
            case 1006:
            case 1009:
                return Cloudy;
            case 1030:
            case 1135:
            case 1147:
                return Fog;
            case 1063:
            case 1150:
            case 1180:
            case 1183:
            case 1186:
            case 1240:
                return LightRain;
            case 1066:
            case 1210:
            case 1213:
            case 1216:
            case 1219:
            case 1225:
            case 1237:
            case 1252:
            case 1258:
            case 1261:
            case 1264:
                return Snow;
            case 1072:
            case 1171:
            case 1198:
            case 1201:
            case 1204:
            case 1207:
            case 1249:
                return RainSnow;
            case 1087:
                return RainThunderstorm;
            case 1114:
            case 1117:
                return SnowBlizzard;
            case 1189:
            case 1192:
            case 1195:
            case 1243:
            case 1246:
                return HeavyRain;
            case 1276:
            case 1279:
            case 1282:
                return Thunderstorm;
        }
    }
    if (isDay === 0) {
        switch (code) {
            case 1000:
                return Clear;
            case 1003:
                return NightPartlyCloudy;
            case 1006:
            case 1009:
                return Cloudy;
            case 1030:
            case 1135:
            case 1147:
                return NightFog;
            case 1063:
            case 1150:
            case 1180:
            case 1183:
            case 1186:
            case 1240:
                return NightLightRain;
            case 1066:
            case 1210:
            case 1213:
            case 1216:
            case 1219:
            case 1225:
            case 1237:
            case 1252:
            case 1258:
            case 1261:
            case 1264:
                return NightSnow;
            case 1072:
            case 1171:
            case 1198:
            case 1201:
            case 1204:
            case 1207:
            case 1249:
                return RainSnow;
            case 1087:
                return RainThunderstorm;
            case 1114:
            case 1117:
                return SnowBlizzard;
            case 1189:
            case 1192:
            case 1195:
            case 1243:
            case 1246:
                return NightRain;
            case 1276:
            case 1279:
            case 1282:
                return NightThunderstorm;
        }
    }
}

const date = {
    today: format(new Date(), "EEEE, LLLL do"),
    day1: format(add(new Date(), {
        days: 1,
    }), "EEEE, LLLL do"),
    day2: format(add(new Date(), {
        days: 2,
    }), "EEEE, LLLL do"),
    day3: format(add(new Date(), {
        days: 3,
    }), "EEEE, LLLL do"),
}

export { getWeatherIcon, date };
