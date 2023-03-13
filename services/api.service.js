import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (iconID) => {
    switch(iconID.slice(0, 2)) {
        case '01':
            return '🌞';
            break;
        case '02':
            return '🌤';
            break;
        case '03':
            return '🌥️';
            break;
        case '04':
            return '🌥️';
            break;
        case '09':
            return '🌧️';
            break;
        case '10':
            return '🌦️';
            break;
        case '11':
            return '🌩️';
            break;
        case '13':
            return '🌨️';
            break;
        case '50':
            return '🌫️';
            break;
    };
};

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Please, set the API-key first: -t [API_KEY]');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'eng',
            units: 'metric'
        }
    });
    return data;
};

export { getWeather, getIcon };