const fs = require("fs");

function generateHTML(data) {
  const baseLayout = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Team Profile Generator</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel='stylesheet' type='text/css' media='screen' href='./style.css'>
            <script src='../index.js'></script>
            <script src="https://kit.fontawesome.com/94216ed639.js" crossorigin="anonymous"></script>

        </head>
        <body>
            <header>
                <h1>My team</h1>
            </header>

            <main id="teamMates">${data}</main>
            
        </body>
        </html>`;

  fs.writeFile("./dist/index.html", baseLayout, (err) =>
    err ? console.error(err) : console.log("Your html file has been created!")
  );
}

module.exports = generateHTML;
