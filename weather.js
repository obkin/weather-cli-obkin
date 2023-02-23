#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCli = () => {
    const agrs = getArgs(process.argv);
    console.log(agrs);
    if (args.h) {
        // Виводимо help
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

