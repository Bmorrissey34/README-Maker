const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation instructions for your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide any usage information.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Provide any contributors',
            name: 'collaborators'
        },
        {
            type: 'input',
            message: 'Provide any tests instructions.',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Provide github username.',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is the link to your repo?',
            name: 'email'
        },
    ])

    .then((answers) => {
        const READMEPageContent = readMeStruct(answers);
    
        fs.writeFile('README.md', READMEPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

    const readMeStruct = ({projectName, description, usage, collaborators, tests, repo, installation, username, }) => 
`# ${projectName}

## Description
    ${description}

## Table of Contents
    - Installation (#Installation)
    - Usage (#Usage)
    - My Info (#my-info)
    - Tests (#Tests)
    - Credits (#Credits)

## Installation
    ${installation}

## Usage
    ${usage}

## My Info
    GitHub Username: ${username}
    Github Repo : ${repo}

## Tests
      ${tests}

## Credits
    ${collaborators}`

    