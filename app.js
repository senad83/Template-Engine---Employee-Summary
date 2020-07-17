const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// creating empty array for storing input from a user, used syntax from Employee.js file 
// and read a little on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor,
// also went to bunch a projects on gitHub and analize code

class EmptyArray {
    constructor (){
        this.entry = [];
        this.currentEntry = { name: "", id: "", email: ""};
    }
// creating function to add new employee, passing all objects again because I don't know how to
// pull information from employee.js, engineer.js, intern.js files
// using syntax from last week homework
    
addEmployee(){
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
            name: "Name",
        },
        {
            type : "input",
            message: "What is employee email?",
            name: "email",
        },

    ]).then(response => {

        // with this I should save current entries of id, name and email,
        // that's what other people did on but I cannot make it work
        this.currentEntry.name = response.name;
        this.currentEntry.id = response.id;
        this.currentEntry.email = response.email
        console.log (response)
        
        if (response.choices === "Manager") {
           this.addManager();
        }else if (response ==="Intern"){
            console.log ("Hi Intern")
        }else {
            console.log ("hi Eng")
        };
       });
    }
}


function askUserToContinue(){
    inquirer.prompt ([
            {
                type: "confirm", message: "Do you want to add new entry", name: "confirm"

            }
]).then (response => {
    if (response.confirm){
        this.addEmployee();
    }else {
        this.quit();
}
})

// trying to add info for every new employee with their specifics depending from their 
// role in the company
// same syntax like in office hour but I'm getting error
// when I remove curly brackets error disapiers
// i saw on solved solution that they're using response for specified things, why?

function addManger() {
    inquirer.prompt([
        { type: "input", message: "what is your office number?", name: "office number"}
    ]).then (response => {
        const manage = new Manager(this.currentEntry.name, this.currentEntry.id, this.currentEntry.email, response.officeNumber);
        this.entry.push(manager);
        this.askUserToContinue();
        
    });
};
function addEngineer () {inquirer.prompt ([
    {
        type: "input", messaage: "what is your github username", name: "github"
    }
]).then(response => {
    const engineer = new Engineer(this.currentEntry.name, this.currentEntry.id, this.currentEntry.email, response.gitHub)
    this.entry.push(engineer);
    this.askUserToContinue();
});
};

function addIntern() {
    inquirer.prompt ([
        {type: "input", message: "what school did you finish?", name: "school"}
        
    ]).then (response => {
        const intern = new Intern (this.currentEntry.name, this.currentEntry.id, this.currentEntry.email, response.school)
        this.entry.push(intern);
        this.askUserToContinue();
    })
}}




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ````
