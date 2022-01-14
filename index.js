const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
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
        name: 'repo'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'BSD', 'None']
    },
]

function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0':
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        case 'Boost':
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        case 'BSD':
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        case 'None':
            return ``
    }
}

function renderLicenseLink(license) {
    if (license == 'None')
        return ''
    else
        return `* [License](#license)`
}

function renderLicenseSection(license) {
    if (license == 'None')
        return ``
    else {
        return `## License:\n The license that was chosen for this project is ${license}
    `
    }
}

inquirer
    .prompt(questions)
    .then((response) =>
        fs.writeFile('README.md', readMeStruct(response), err => err ? console.error(err) : console.log('README.md Created!'))
    )

const readMeStruct = ({
        projectName,
        description,
        usage,
        collaborators,
        tests,
        repo,
        installation,
        username,
        license,
    }) =>

    `# ${projectName}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

- Installation (#Installation)
- Usage (https://github.com/Bmorrissey34/README-Maker/blob/main/README.md#Usage)
- My Info (https://github.com/Bmorrissey34/README-Maker/blob/main/README.md#my-info)
- Tests (https://github.com/Bmorrissey34/README-Maker/blob/main/README.md#Tests)
- Credits (https://github.com/Bmorrissey34/README-Maker/blob/main/README.md#Credits)
- ${renderLicenseLink(license)}


## Installation
${installation}

## Usage
${usage}

## My Info
GitHub Username: https://github.com/${username}
Github Repo : ${repo}

## Tests
      ${tests}

## Credits
    ${collaborators}

${renderLicenseSection(license)}    
    `

