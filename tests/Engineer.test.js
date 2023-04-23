const inquirer = require("inquirer");
const { SetEngineer } = require("../lib/engineerClass");
const { engineerQuestions } = require("../utils/questions.js");

jest.mock("inquirer");
inquirer.prompt.mockReturnValue(
  Promise.resolve({
    engineerName: "Alec",
    engineerEmployeeID: "2",
    engineerEmail: "alec@example.com",
    engineerGithub: "ibealec",
  })
);

const expectedLayout = `
        <section id="teammate">
        <h1>Alec</h1>
        <h2><i class="fa-solid fa-glasses"></i>Engineer</h2>
        <p><span>ID: </span>2</p>
        <a href="mailto:alec@example.com"><span>Email: </span>alec@example.com</a>
        <br>
        <a href="https://github.com/ibealec"><span>GitHub: </span>ibealec</a>
        </section>`;

describe("Engineer", () => {
  test("Should return an object with the recived answers", async () => {
    const engineer = await new SetEngineer(engineerQuestions).inquirer();
    expect(engineer).toEqual({
      engineerName: "Alec",
      engineerEmployeeID: "2",
      engineerEmail: "alec@example.com",
      engineerGithub: "ibealec",
    });
  });
  test("should return a text that is going to be part of the html", async () => {
    const engineerAnswers = await new SetEngineer(engineerQuestions).inquirer();
    const engineer = await new SetEngineer().generateMarkdown(engineerAnswers);
    expect(engineer).toEqual(expectedLayout);
  });
});
