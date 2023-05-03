const inquirer = require('inquirer');
const consoleTable = require('console.table');

const menu = () => {
    inquirer.prompt ([{
        name: 'Question',
        message: 'What would you like to do?',
        type: 'rawlist',
        choices: [
            'View Departments',
            'Add Department',
            'View Roles',
            'Add Roles',
            'View Employees',
            'Add Employee',
        ]
    }]).then(answer => {
        switch (answer) {
            case 'View All Employees':
              viewAllEmployees();
              break;
      
            case 'Add Employee':
              addEmployee();
              break;
      
            case 'Update Employee Role':
              updateEmployeeRole();
              break;
      
            case 'View All Roles':
              viewAllRoles();
              break;
      
            case 'Add Role':
              addRole();
              break;
      
            case 'View All Departments':
              viewAllDepartments();
              break;
      
            case 'Add Department':
              addDepartment();
              break;
        };
    });
};

const viewAllDepartments = () => {
    fetch('http://localhost:3001/api/department', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then(function (response) {
        return response.json();
    }).then(function(data) {
        console.table(data);
    });
};

menu();
