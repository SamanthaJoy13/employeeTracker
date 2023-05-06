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
    fetch('/api/department', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        dataDisplayer(data);
    });
};

const addDepartment = () => {
  inquirer.prompt([
    {
      name: 'name',
      message: 'What is the department name?',
      type: 'input',
    }
  ]).then(answers => {
    fetch('/api/department', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });
  });
};

const viewAllRoles = () => {
  fetch('/api/role', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(function(response) {
    return response.json();
  }).then(function (data) {
    dataDisplayer(data);
  });
};

menu();
