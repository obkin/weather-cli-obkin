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

        "-s [CITY]]" ${chalk.magenta('- set city')}
        "-t [TOKEN]" ${chalk.magenta('- set token (api key)')}

        "-h" ${chalk.magenta('- help info')}
        "weather" ${chalk.magenta('- show the weather forecast')}

        ${chalk.dim('You can always contact us:')}
        ${chalk.dim('kapellwork@gmail.com')}

        `)
    );
};

export { printError, printSuccess, printHelp };

