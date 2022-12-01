// TODO: Include packages needed for this application
const Liscences = {
    'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    'APACHE 2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3':'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None':'None'
}
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
        name: 'license',
        message: 'please select liscence from list',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
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
const generateReadme = ({projectName,description,installation,usage,license,contributing,tests,github,email}) =>
`# ${projectName}

## Table of Contents

* [Description](#description)

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Contact](#contact)

## Description

${description}

## License
${Liscences[license]}

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
        .then((answers)=> writeFile('readme.md', generateReadme(answers)))
        .then(()=>console.log('succesfully wrote to readme.md'))
        .catch((err) => console.error(err));
}  

// Function call to initialize app
init();

