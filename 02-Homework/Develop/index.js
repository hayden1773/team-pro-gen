let inquirer = require('inquirer')
let fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let employees = []


function menu(){
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "select from the following",
        choices: ["Add Enginner", "Add Intern", "Complete Team"],
    }).then(function({choice}){
        console.log(choice)
        
    })
}

inquirer.
prompt ([
    {
        type: "input",
        name: "Name",
        message: "Input your name",
    },
    {
        type: "input",
        name: "ID",
        message: "Input your ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Input your Email"
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "Input Office Number"
    },
]).then(function({Name, ID, OfficeNumber, Email}){
    let newManager = new Manager(Name, ID, OfficeNumber, Email)

    employees.push(newManager)
    menu()
})