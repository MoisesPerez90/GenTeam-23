const inquirer = require("inquirer");
const { SetIntern } = require("../lib/internClass");
const { internQuestions } = require("../utils/questions.js");

jest.mock("inquirer");
inquirer.prompt.mockReturnValue(
  Promise.resolve({
    internName: "John",
    internEmployeeID: "5",
    internEmail: "john@example.com",
    internSchool: "2University",
  })
);

const expectedLayout = `
        <section id="teammate">
        <h1>John</h1>
        <h2><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
        <p><span>ID: </span>5</p>
        <a href="mailto:john@example.com"><span>Email: </span>john@example.com</a>
        <p><span>School: </span>2University</p>
        </section>`;

describe("Intern", () => {
  test("Should return an object with the recived answers", async () => {
    const intern = await new SetIntern(internQuestions).inquirer();
    expect(intern).toEqual({
      internName: "John",
      internEmployeeID: "5",
      internEmail: "john@example.com",
      internSchool: "2University",
    });
  });
  test("should return a text that is going to be part of the html", async () => {
    const internAnswers = await new SetIntern(internQuestions).inquirer();
    const intern = await new SetIntern().generateMarkdown(internAnswers);
    expect(intern).toEqual(expectedLayout);
  });
});
