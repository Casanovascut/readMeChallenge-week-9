// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
        type:'input',
        name: 'projectName',
        message: 'What is the project name?'
    },
        {
        type:'input',
        name: 'description',
        message: 'Describe your project'
    },
        {
        type:'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
        {
        type:'input',
        name: 'usage',
        message: 'What is the usage of this application?'
    },
        {
        type:'list',
        name: 'liscense',
        message: 'please select liscence from list',
        choices: ''
    },
        {
        type:'input',
        name: 'contributing',
        message: 'what are the contribution guidelines?'
    },
        {
        type:'input',
        name: 'tests',
        message: 'What are the test instructions'
    },
        {
        type:'input',
        name: 'github',
        message: 'what is your git hub username?'
    },
        {
        type:'input',
        name: 'email',
        message: 'what is your contact email?'
    },
    ])
}

// TODO: Create a function to write README file
const generateReadme = ({projectName,description,installation,usage,liscense,contributing,tests,github,email}) =>
`# ${projectName} ${liscense}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Contact](#contact)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## contributing
${contributing}

## Testing

${tests}

## Contact

${github}
${email}
`

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers)=> writeFile('example.md', generateReadme(answers)))
        .then(()=>console.log('succesfully wrote to reame.md'))
        .catch((err) => console.error(err));
}  

// Function call to initialize app
init();

