import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
        '-h' - help info;
        '-s [CITY]]' - set city;
        '-t [TOKEN (API_KEY)]' - set token;
        'weather' - weather forecast.
        `)
    );
};

export { printError, printSuccess, printHelp };

