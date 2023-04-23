const inquirer = require("inquirer");

class SetManager {
  constructor(questions) {
    this.questions = questions;
  }

  generateMarkdown = (data) => {
    return `
        <section id="manager">
        <h1>${data.managerName}</h1>
        <h2><i class="fas fa-coffee"></i>Manager</h2>
        <p><span>ID: </span>${data.managerEmployeeID}</p>
        <a href="mailto:${data.managerEmail}"><span>Email: ${data.managerEmail}</span></a>
        <p><span>Office number: </span>${data.managerOfficeNumber}</p>
        </section>`;
  };

  inquirer = () => {
    return inquirer.prompt(this.questions);
  };
}

module.exports = { SetManager };
