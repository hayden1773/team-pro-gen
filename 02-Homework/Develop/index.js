let inquirer = require('inquirer')
let fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const internal = require('stream');
const Employee = require('./lib/Employee');
let employees = []

const generatehtml = require ('./util/generateHtml');

function menu() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "select from the following",
        choices: ["Add Engineer", "Add Intern", "Complete Team"],
    }).then(function ({ choice }) {
        console.log(choice)
        if (choice === "Add Engineer") {
            inquirer.
                prompt([
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
                        name: "Github",
                        message: "Input Github"
                    },
                ]).then(function ({ Name, ID, Github, Email }) {
                    let newEngineer = new Engineer(Name, ID, Github, Email)

                    employees.push(newEngineer)
                    menu()
                })
        } else if (choice === "Add Intern") {
            inquirer.
                prompt([
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
                        name: "School",
                        message: "Input School"
                    },
                ]).then(function ({ Name, ID, School, Email }) {
                    let newIntern = new Intern(Name, ID, School, Email)

                    employees.push(newIntern)
                    menu()
                })

        } else if (choice === "Complete Team") {
            console.log(employees)
            
            fs.writeFile('./output/index.html', generatehtml(employees), (err)=> {console.log("completed team!")} )
        }

    })
}

inquirer.
    prompt([
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
    ]).then(function ({ Name, ID, OfficeNumber, Email }) {
        let newManager = new Manager(Name, ID, OfficeNumber, Email)

        employees.push(newManager)
        menu()
    })