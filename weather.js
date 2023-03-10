#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (userToken) => {
    if (!userToken.length) {
        printError('Please, enter the token: -t [TOKEN]');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, userToken);
        printSuccess(`'${userToken}' - saved as a token ;)`);
    } catch(e) {
        printError(e.message + '.');
    }
};

const getForcast = async () => {
    try {
        const weather = await getWeather(process.env.CITY);
        console.log(weather);
    } catch(e) {
        if (e?.response?.status === 404) {
            printError('Wrong name of city :/');
        } else if (e?.response?.status === 401) {
            printError('Wrong token :/');
        } else {
            printError(`Something went wrong: ${e.message}.`);
        }
    }
};

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Зберігаємо місто
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getForcast();
    // Вивести погоду (якщо аргументи не були передані)
};

initCli();