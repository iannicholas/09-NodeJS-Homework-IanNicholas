// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge =  `[![license](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "Apache-2.0") {
    licenseBadge =  `[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === "OSL-3.0") {
    licenseBadge =  `![license](https://img.shields.io/badge/License-OSL_3.0-blue.svg)`;
  } else if (license === "MPL-2.0") {
    licenseBadge =  `[![license](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  } else {
    licenseBadge =  `[![license](https://img.shields.io/badge/License-gpl_license-blue.svg)]`;
  } 
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink =  `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache-2.0") {
    licenseLink =  `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "OSL-3.0") {
    licenseBadge =  `(https://opensource.org/licenses/OSL-3.0)`;
  } else if (license === "MPL-2.0") {
    licenseLink =  `(https://opensource.org/licenses/MPL-2.0)`;
  } else {
    licenseLink =  `(https://opensource.org/licenses/gpl-license)`;
  } 
  return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return license !== "" ? `${licenseBadge}${licenseLink}` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # Project Name
  ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  ## Descritpion
  ${data.description}

  ## Table Of Contents
  [Installation](#installation)

  [License](#license)

  [Usage](#usage)

  [Tests](#test)
  ## Installation

  ~~~
  ${data.installation}
  ~~~

  ## License
  ${data.license}

  ## Usage
  ${data.usage}
  
  ## Test
  ~~~
  ${data.testInstructions}
  ~~~

  ## Contact
  With any questions contact me at <ian.nicholas.webdeveloper@gmail.com>, for contribution efforts <https://github.com/iannicholas>
  `;
  }

module.exports = generateMarkdown;