import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}

        "-s [CITY]]" ${chalk.magenta('- set city')}
        "-t [TOKEN]" ${chalk.magenta('- set token (api key)')}

        "-h" ${chalk.magenta('- help info')}
        "weather" ${chalk.magenta('- show the weather forecast')}

        ${chalk.dim('You can always contact us:')}
        ${chalk.dim('kapellwork@gmail.com')}

        `)
    );
};

const printWeather = (weatherObj) => {
    const curTemp = weatherObj.main.temp;
    const feelsTemp = weatherObj.main.feels_like;
    console.log(chalk.bgYellow(' WEATHER '),
        `Here is the weather in ${chalk.magenta(weatherObj.name)}:
          Now: ${chalk.dim(weatherObj.weather[0].description)} ${getIcon(weatherObj.weather[0].icon)}
          Temperature: ${getTemperatureColor(curTemp.toFixed(1))}°C, feels like: ${getTemperatureColor(feelsTemp.toFixed(1))}°C
          Humidity: ${chalk.dim(weatherObj.main.humidity)}${chalk.dim('%')}
          Wind speed: ${chalk.dim(weatherObj.wind.speed)}${chalk.dim('m/s')}

          Sunset: ${chalk.hex('#ed9d07')(timeConverter(weatherObj.sys.sunset))}
          Sunrise: ${chalk.hex('#ed9d07')(timeConverter(weatherObj.sys.sunrise))}
    `);
};

function getTemperatureColor(temperature) {
    if (temperature < 0) {
        return chalk.dim(chalk.gray(temperature));
    } else if (temperature === 0 || temperature <= 9) {
        return chalk.hex('#1479de')(temperature);
    } else if (temperature > 9 && temperature <= 17) {
        return chalk.green(temperature);
    } else if (temperature > 17 && temperature <= 25) {
        return chalk.yellow(temperature);
    } else if (temperature > 25) {
        return chalk.hex('#fc0303')(temperature);
    }
}

function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    // const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    const time = hour + ':' + min;
    return time;
}

export { printError, printSuccess, printHelp, printWeather };