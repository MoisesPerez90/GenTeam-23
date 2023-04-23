const { SetManager } = require("./lib/managerClass");
const { SetEngineer } = require("./lib/engineerClass");
const { SetIntern } = require("./lib/internClass");
const generateHTML = require("./lib/LayoutHTML");
const addTeamMate = require("./lib/employeeClass");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");

const layout = [];

async function init() {
  const managerSectionResponse = await new SetManager(
    managerQuestions
  ).inquirer();
  const managerSection = await new SetManager().generateMarkdown(
    managerSectionResponse
  );
  layout.push(managerSection);

  let value = true;

  while (value) {
    const addEmployee = await addTeamMate();
    switch (addEmployee.addTeammate) {
      case "Add an engineer":
        const engineerSectionResponse = await new SetEngineer(
          engineerQuestions
        ).inquirer();
        const engineerSection = await new SetEngineer().generateMarkdown(
          engineerSectionResponse
        );
        layout.push(engineerSection);
        value = true;
        break;
      case "Add an intern":
        const internSectionResponse = await new SetIntern(
          internQuestions
        ).inquirer();
        const internSection = await new SetIntern().generateMarkdown(
          internSectionResponse
        );
        layout.push(internSection);
        value = true;
        break;
      case "Finish building the team":
        generateHTML(layout);
        value = false;
        break;
    }
  }
}

init();
