const inquirer = require("inquirer");
const { addTeamMateQuestion } = require("../utils/questions");

function addTeamMate() {
  return inquirer.prompt(addTeamMateQuestion);
}

module.exports = addTeamMate;
