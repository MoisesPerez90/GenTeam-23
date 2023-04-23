const inquirer = require("inquirer");

class SetEngineer {
  constructor(questions) {
    this.questions = questions;
  }

  generateMarkdown = (data) => {
    return `
        <section id="teammate">
        <h1>${data.engineerName}</h1>
        <h2><i class="fa-solid fa-glasses"></i>Engineer</h2>
        <p><span>ID: </span>${data.engineerEmployeeID}</p>
        <a href="mailto:${data.engineerEmail}"><span>Email: </span>${data.engineerEmail}</a>
        <br>
        <a href="https://github.com/${data.engineerGithub}"><span>GitHub: </span>${data.engineerGithub}</a>
        </section>`;
  };

  inquirer = () => {
    return inquirer.prompt(this.questions);
  };
}

module.exports = { SetEngineer };
