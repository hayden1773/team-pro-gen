// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer {
    constructor(){
        this.Employee =[];
        this.github= github;
    }
    addEmployee(name,id,email){
        const newEmploy = new Employee(name,id,email);
        this.Employee.push(newEmploy);
    }
}

module.exports = Engineer