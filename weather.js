#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Зберігаємо місто
    }
    if (args.t) {
        // Зберігаємо токен
    }
    // Вивести погоду (якщо аргументи не були передані)
};

initCli();

