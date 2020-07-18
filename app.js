const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

        var entry = [];
        var currentEntry = { name: "", id: "", email: ""};


function askUserToContinue(){
    inquirer.prompt ([
            {
                type: "confirm", message: "Do you want to add new entry", name: "confirm"

            }
]).then (response => {
    if (response.confirm){
        addEmployee();
    }else {
        quit();
}
})
}
function quit() {
  var final = render(entry);
  console.log (final);
  fs.writeFileSync ("./output/index.html", final);
}


function addEngineer () {inquirer.prompt ([
    {
        type: "input", message: "what is your github username", name: "github"
    }
]).then(response => {
    const engineer = new Engineer(currentEntry.name, currentEntry.id, currentEntry.email, response.github)
    entry.push(engineer);
    askUserToContinue();
});
};

function addManager() {
    inquirer.prompt([
        { type: "input", message: "what is your office number?", name: "officeNumber"}
    ]).then (response => {
        const manager = new Manager(currentEntry.name, currentEntry.id, currentEntry.email, response.officeNumber);
        entry.push(manager);
        askUserToContinue();
    });
}
function addIntern(){
    inquirer.prompt ([
        {type: "input", message: "what school did you finish?", name: "school"}
        
    ]).then (response => {
        const intern = new Intern (currentEntry.name, currentEntry.id, currentEntry.email, response.school)
        entry.push(intern);
        askUserToContinue();
    })

}


function addEmployee(){
    inquirer.prompt ([
        {
            type : "list", 
            name: "empltype", 
            message: "What is the type of employee?", 
            choices: ["Manager", "Intern", "Engineer"]
        },
        {
            type : "input",
            message: "What is the name?",
            name: "name",
        },
        {
            type : "input",
            message: "What is employee email?",
            name: "email",
        },
        {
            type : "input",
            message: "What is employee id?",
            name: "id",
        }

    ]).then(response => {
        
        currentEntry.name = response.name;
        currentEntry.id = response.id;
        currentEntry.email = response.email
        console.log (response)
        
        if (response.empltype === "Manager") {
           addManager();
        }else if (response.empltype === "Intern"){
            addIntern();
        }else {
            addEngineer();
        };
       });
    };

addEmployee();

