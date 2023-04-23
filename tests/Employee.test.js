const inquirer = require("inquirer");
const addTeamMate = require("../lib/employeeClass");

jest.mock("inquirer");
inquirer.prompt.mockReturnValue(
  Promise.resolve({
    addTeammate: "Add an engineer",
  })
);

describe("Intern", () => {
  test("Should return an object with the recived answers", async () => {
    const intern = await new addTeamMate();
    expect(intern).toEqual({
      addTeammate: "Add an engineer",
    });
  });
});
