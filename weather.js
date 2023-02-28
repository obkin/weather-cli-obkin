#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Зберігаємо місто
    }
    if (args.t) {
        saveKeyValue('token', args.t);
    }
    // Вивести погоду (якщо аргументи не були передані)
};

initCli();

