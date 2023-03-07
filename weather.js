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
    getWeather('kyiv');
    // Вивести погоду (якщо аргументи не були передані)
};

initCli();