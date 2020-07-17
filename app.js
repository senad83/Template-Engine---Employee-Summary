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
    render (entry);
}

function addEngineer () {inquirer.prompt ([
    {
        type: "input", message: "what is your github username", name: "gitHub"
    }
]).then(response => {
    const engineer = new Engineer(currentEntry.name, currentEntry.id, currentEntry.email, response.gitHub)
    entry.push(engineer);
    askUserToContinue();
});
};

function addManager() {
    inquirer.prompt([
        { type: "input", message: "what is your office number?", name: "officeNumber"}
    ]).then (response => {
        // i saw on solved solution that they're using response for specified things, why?
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
        console.log(response.empltype, 'here part 2')
        console.log(response.choices, "here")
        // with this I should save current entries of id, name and email,
        // that's what other people did on but I cannot make it work
        
        currentEntry.name = response.name;
        currentEntry.id = response.id;
        currentEntry.email = response.email
        console.log (response)

        // need to fix this is not creating array
        
        // tried to pull information from here for next step but adding manager doesn't work
        // or console.log either
        // adedd response.empltype with help of assistant on bcs
        
        if (response.empltype === "Manager") {
           addManager();
        }else if (response.empltype === "Intern"){
            addIntern();
        }else {
            addEngineer();
        };
       });
    };

// this part i got from ask bootcamp spot
// ask Chris to explain this part
// const array = new EmptyArray();
// array.addEmployee();

addEmployee();

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
