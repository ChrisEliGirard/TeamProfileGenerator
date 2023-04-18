const fs = require("fs");
// Functions to generate the employee cards and the webpage itself
const generateHTML = (team) => {
  const htmlCards = [];

  const generateManager = manager => {
    let managerCard = `
              <div class="col-4 mt-4">
                <div class="card h-100 w-75">
                  <div class="card-header bg-primary">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4>
                  </div>
                  <div class="card-body">
                    <p class="id border-top border-bottom border-1">ID: ${manager.id}</p>
                    <p class="email border-top border-bottom border-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office border-top border-bottom border-1">Office Number: ${manager.officeNumber}</p>
                  </div>
                </div>
              </div>
    `;
    htmlCards.push(managerCard);
  }

  const generateEngineer = engineer => {
    let engineerCard = `
              <div class="col-4 mt-4">
              <div class="card h-100 w-75">
                <div class="card-header bg-primary">
                  <h3>${engineer.name}</h3>
                  <h4>Engineer</h4>
                </div>
                <div class="card-body">
                  <p class="id border-top border-bottom border-1">ID: ${engineer.id}</p>
                  <p class="email border-top border-bottom border-1">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                  <p class="github border-top border-bottom border-1">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
              </div>
            </div>
    `;
    htmlCards.push(engineerCard);
  }

  const generateIntern = intern => {
    let internCard = `
              <div class="col-4 mt-4">
              <div class="card h-100 w-75">
                <div class="card-header bg-primary">
                  <h3>${intern.name}</h3>
                  <h4>Intern</h4>
                </div>
                <div class="card-body">
                  <p class="id border-top border-bottom border-1">ID: ${intern.id}</p>
                  <p class="email border-top border-bottom border-1">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                  <p class="school border-top border-bottom border-1">School: ${intern.school}</p>
                </div>
              </div>
            </div>
    `;
    htmlCards.push(internCard);
  }

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
       generateManager(team[i]); 
    }
    if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]); 
     }
     if (team[i].getRole() === "Intern") {
        generateIntern(team[i]); 
     }
}
  return htmlCards.toString();
}
const pageGenerator = team => {
  let page = 
  `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/styles.css"/>
        <script src="https://kit.fontawesome.com/fc1e1c2b79.js" crossorigin="anonymous"></script>
    </head>
    <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="row team-area col-12 d-flex justify-content-center">
                  ${generateHTML(team)}
              </div>
          </div>
      </div>
    </body>
  </html>`

  fs.writeFile("./dist/views/index.html", page, (err) => err && console.error(err));
};

module.exports = pageGenerator;
