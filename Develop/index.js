// TODO: Include packages needed for this application
const inqurier = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'enter project title'
    },{
        type: 'confirm',
        name: 'table',
        message: 'include table of contents?'

    }, {
        name: 'sections',
        type: 'checkbox',
        message: 'What sections would you like to include in the table of contents?',
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        when (answers) {
            return answers.table
        }


    }, {
        type: 'confirm',
        name: 'helper',
        message: 'Would you like to enable description helper?'

    }, {
        type: 'input',
        name: 'function',
        message: 'what does your application do?',
        when (answers) {
            return answers.helper
        }
    }, {
        type: 'checkbox',
        name: 'tech',
        message: 'what tech did you use?',
        choises: ['javascript, css, html, node.js'],
        when (answers) {
            return answers.helper
        }

    }, {
        type: 'input',
        name: 'custom',
        message: 'enter custom description',
        when (answers) {
            return !answers.helper
        }
    }









``
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
