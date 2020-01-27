const fs = require("fs");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser () {
    return inquirer.prompt([
            
            {
            type: "input",
            message: "Enter your email address:",
            name: "email"
            },
            
            {
            type: "input",
            message: "Enter your id:",
            name: "color"
            }
        ]);
    }