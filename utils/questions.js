const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What's the manager's name?",
  },
  {
    type: "input",
    name: "managerEmployeeID",
    message: "What's the manager's employee ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What's the manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What the manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What's the engineer's name?",
  },
  {
    type: "input",
    name: "engineerEmployeeID",
    message: "What's the engineer's employee ID?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What's the engineer's email?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What the engineer's github username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What's the intern's name?",
  },
  {
    type: "input",
    name: "internEmployeeID",
    message: "What's the intern's employee ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What's the intern's email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What the intern's school?",
  },
];

const addTeamMateQuestion = [
  {
    type: "list",
    name: "addTeammate",
    message:
      "Do you want to add an engineer/intern or to finish building the team?",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addTeamMateQuestion,
};
