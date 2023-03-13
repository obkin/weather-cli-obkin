#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp, printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (userToken) => {
    if (!userToken.length) {
        printError('Please, enter the token: -t [TOKEN]');
        return;
    } else if (userToken === 'undefined') {
        printError('Please, enter the correct token name.');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, userToken);
        printSuccess(`'${userToken}' - saved as a token ;)`);
    } catch(e) {
        printError(e.message + '.');
    }
};

const saveCity = async (userCity) => {
    if (!userCity.length) {
        printError('Please, enter the city: -s [CITY]');
        return;
    } else if (userCity === 'undefined') {
        printError('Please, enter the correct name of the city.');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, userCity);
        printSuccess(`'${userCity}' - saved as a city ;)`);
    } catch(e) {
        printError(e.message + '.');
    }
};

const getForcast = async () => {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    try {
        const weatherObj = await getWeather(city);
        printWeather(weatherObj);
    } catch(e) {
        if (e?.response?.status === 404) {
            printError('Wrong name of the city.');
        } else if (e?.response?.status === 401) {
            printError('Wrong token.');
        } else {
            printError(`Something went wrong: \n ${e.message}.`);
        }
    }
};

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForcast();
};

initCli();