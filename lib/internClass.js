const inquirer = require("inquirer");

class SetIntern {
  constructor(questions) {
    this.questions = questions;
  }
  generateMarkdown = (data) => {
    return `
        <section id="teammate">
        <h1>${data.internName}</h1>
        <h2><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
        <p><span>ID: </span>${data.internEmployeeID}</p>
        <a href="mailto:${data.internEmail}"><span>Email: </span>${data.internEmail}</a>
        <p><span>School: </span>${data.internSchool}</p>
        </section>`;
  };
  inquirer = () => {
    return inquirer.prompt(this.questions);
  };
}

module.exports = { SetIntern };
