const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);


var teamMembers = {};

async function specificQuestion (answers) {
    if (answers.title == "Manager"){
        return await inquirer.prompt([
            {
            type: "number",
            message: "What is your office number?",
            name:"specificAnswer"
            }
        ])}
    else if (answers.title == "Intern"){
        return await inquirer.prompt([
            {
            type: "input",
            message: "What school do you attend?",
            name:"specificAnswer"
            }
        ])}
    else  if (answers.title == "Engineer"){
        return await inquirer.prompt([
            {
            type: "input",
            message: "What is your GitHub username?",
            name:"specificAnswer"
            } 
        ])}};
   

async function teammemberInfo (response) {
    console.log(response);
    teamMembers.length = response;
    for (var i = 0; i < response; i++){

        var answers = await inquirer.prompt([      
          
        {
        type: "input",
        message: "Enter your Name:",
        name: "name"
        },
            
        {
        type: "number",
        message: "Enter your id:",
        name: "id"
        },

        {
        type: "input",
        message: "Enter your email address:",
        name: "email"
        },

        {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
        }
        ]);
    
    // console.log(answers);
    var specQuest = await specificQuestion(answers);
    console.log(specQuest);
    answers.length = 5;
    answers["answer"]=specQuest.specificAnswer;
    
    console.log(answers);
    teamMembers[i]=answers;
    console.log(teamMembers);
    }
    } 
    

    inquirer.prompt(
        
        {
            type: "number",
            message: "How many team members would you like to add?",
            name: "teamSize"
        }
    )
    .then(function ({teamSize}) {teammemberInfo (teamSize)})


    // promptUser().then(function() {console.log(teamMembers)});