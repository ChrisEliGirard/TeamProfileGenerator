const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageGenerator = require("./src/generateHTML");

// Creating Questions objects for inquirer to use
const employeeInfo = [
    {type: "input", name: "name", message: "Enter the Employee's name?"},
    {type: "input", name: "id", message: "What is the Employee's Id #?"},
    {type: "input", name: "email", message: "What is the Employee's Email?"}
];

const extraQuestion = {
    manager: {type: "input", name: "officeNumber", message: "What is the Managers office phone number?"},
    engineer: {type: "input", name: "github", message: "What is the Engineers github url?"},
    intern: {type: "input", name: "school", message: "What is the name of the Interns School?"}
};

const addAnother = {type: "confirm", name: "choice", message: "Would you like to add another employee?"};
const roleQuestion = {type: "list", name: "roleQuest", message: "What is the Employee's Role?", choices: ["Engineer", "Intern", "Cancel and Generate Page"]};

// Initializing special questions objects for each class
const managerInfo = [];
const engineerInfo = [];
const internInfo = [];
managerInfo.push(...employeeInfo, extraQuestion.manager);
engineerInfo.push(...employeeInfo, extraQuestion.engineer);
internInfo.push(...employeeInfo, extraQuestion.intern);

// initializing team object
team = [];

// Starter function to kickoff the generator that gets the managers info
function buildTeam() {
    console.log('Welcome to Team Profile Generator!\n ------------------------------------------------------\n Lets start with the manager of the team!')
    inquirer
        .prompt(managerInfo)
        .then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            team.push(manager);
            console.log(team);
            anotherOne();
        });
        
};

// Reusable Function to determine if another Employee needs to be added after each employee is created
function anotherOne() {
    inquirer
        .prompt(addAnother)
        .then(val => {
            if (val.choice) {
                roleSelect();
            } else {
                pageGenerator(team);
            }
        })
}

// Reuable function used to determine the role of the next employee to be entered
function roleSelect() {
    inquirer
        .prompt(roleQuestion)
        .then(data => {
            switch (data.roleQuest) {
                case "Engineer":
                    buildEngineer();
                    break;
                case "Intern":
                    buildIntern();
                    break;
                case "Cancel and Generate Page":
                    pageGenerator(team)
                    break;
              };
        })
};

function buildEngineer() {
    console.log("Now adding an Engineer\n ------------------------------------------------------\n")
    inquirer
        .prompt(engineerInfo)
        .then(data => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            console.log(team);
            anotherOne();
        });
}

function buildIntern() {
    console.log("Now adding an Intern\n ------------------------------------------------------\n")
    inquirer
        .prompt(internInfo)
        .then(data => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            console.log(team);
            anotherOne();
        });
}
buildTeam();