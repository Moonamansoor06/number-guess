#! /usr/bin/env node
import { question } from 'readline-sync';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import colors from 'colors';
function main() {
    clear();
    console.log(chalk.bgGray(figlet.textSync('Number Guess', { horizontalLayout: 'full' })));
    console.log("");
    let user_input = question(colors.bgMagenta('guess the  number between 1-100 \n'));
    console.log("");
    let num_user = Number(user_input);
    if (Number(user_input) <= 100) {
        let sys_number = Math.round(Math.random() * 10);
        if (sys_number > num_user)
            console.log(colors.magenta(`your guess ${num_user}is smaller than ${sys_number}`));
        if (sys_number < num_user)
            console.log(`your guess ${num_user} is bigger than`, sys_number);
        if (sys_number == num_user) {
            console.log("you guessed it", sys_number);
        }
    }
    else
        console.log("Wrong input! number was supposed to be between 1 and 100");
}
main();
