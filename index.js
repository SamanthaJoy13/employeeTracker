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

const  addRole = () => {
  fetch('/api/role', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(function (data) {
    const departmentValues = data.map((department) => ({
      name: department.name,
      value: department.idD,
    }));
    inquirer.promt([
      {
        name: 'title',
        message: 'What is the role title?',
        type: 'input',
      },
      {
        name: 'salary',
        message: 'What is the salray of the role?',
        type: 'input',
      },
      {
        name: 'department_id',
        message: 'What is the department id of the role?',
        type: 'rawlist',
        choices: departmentValues,
      }]).then(answers => {
        fetch('/api/role'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(answers),
        }
      });
      questions();
  });
};

const viewAllEmployees = () => {
  fetch('/api/employee', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    dataDisplayer(data);
  });
};

const  addEmployee = () => {
  fetch('/api/role', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(function (data) {
    const roleValues = data.map((department) => ({
      name: role.title,
      value: role.idR,
    }));
    inquirer.promt([
      {
        name: 'first_name',
        message: 'What is the first name of the employee?',
        type: 'input',
      },
      {
        name: 'last_name',
        message: 'What is the last name of the employee?',
        type: 'input',
      },
      {
        name: 'role_id',
        message: 'What is the role of the employee?',
        type: 'rawlist',
        choices: roleValues,
      },
      {
        name: 'manager_id',
        message: 'Who is the manager of this employee?',
        type: 'input',
      }]).then(answers => {
        fetch('/api/employee'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(answers),
        }
      });
      questions();
  });
};

const dataDisplayer = (data) => {
  console.table(data);
  questions();
};

menu();
