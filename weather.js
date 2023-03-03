#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (userToken) => {
    try {
        await saveKeyValue('token', userToken);
        printSuccess('The token was saved ;)');
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
    // Вивести погоду (якщо аргументи не були передані)
};

initCli();