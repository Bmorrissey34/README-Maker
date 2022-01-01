const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What your project name?',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Why did you create this project, what problem does it solve?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the live url to your project?',
            name: 'liveURL'
        },
        {
            type: 'input',
            message: 'What is the link to your repo?',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'If not a live link how do you install your project and/or how does your project function?',
            name: 'installation'
        },
        
        {
            type: 'input',
            message: 'Did you have any collaborators?',
            name: 'collaborators'
        }
        
    ])

    .then((answers) => {
        const READMEPageContent = readMeStruct(answers);
    
        fs.writeFile('README.md', READMEPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

    const readMeStruct = ({projectName, description, liveURL, collaborators, repo, installation}) => 
`# ${projectName}

## Description
    ${description}

## Installation
    ${installation}

## Usage
    GitHub Repo : ${repo}
    Live Url : ${liveURL}

## Credits
    ${collaborators}`

    