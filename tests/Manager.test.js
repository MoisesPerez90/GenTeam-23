const inquirer = require("inquirer");
const { SetManager } = require("../lib/managerClass");
const { managerQuestions } = require("../utils/questions.js");

jest.mock("inquirer");
inquirer.prompt.mockReturnValue(
  Promise.resolve({
    managerName: "Joel",
    managerEmployeeID: "1",
    managerEmail: "joel@example.com",
    managerOfficeNumber: "1",
  })
);

const expectedLayout = `
        <section id="manager">
        <h1>Joel</h1>
        <h2><i class="fas fa-coffee"></i>Manager</h2>
        <p><span>ID: </span>1</p>
        <a href="mailto:joel@example.com"><span>Email: joel@example.com</span></a>
        <p><span>Office number: </span>1</p>
        </section>`;

describe("Manager", () => {
  test("Should return an object with the recived answers", async () => {
    const manager = await new SetManager(managerQuestions).inquirer();
    expect(manager).toEqual({
      managerName: "Joel",
      managerEmployeeID: "1",
      managerEmail: "joel@example.com",
      managerOfficeNumber: "1",
    });
  });
  test("should return a text that is going to be part of the html", async () => {
    const managerAnswers = await new SetManager(managerQuestions).inquirer();
    const manager = await new SetManager().generateMarkdown(managerAnswers);
    expect(manager).toEqual(expectedLayout);
  });
});
