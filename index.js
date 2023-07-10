const inquirer = require('inquirer');
const consoleTable = require('console.table');

const menu = () => {
    inquirer.prompt([{
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
        switch (answer.Question) {
            case 'View Departments':
                viewAllDepartments();
                break;

            case 'Add Department':
                addDepartment();
                break;

            case 'View Roles':
                viewAllRoles();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'View Employees':
                viewAllEmployees();
                break;

            case 'Add Employee':
                addEmployee();
                break;
        }
    });
};

const viewAllDepartments = () => {
    fetch('http://localhost:3001/api/department', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.table(data);
        menu();
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
        fetch('http://localhost:3001/api/department', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers),
        }).then(() => {
            menu();
        });
    });
};

const viewAllRoles = () => {
    fetch('http://localhost:3001/api/role', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        consoleTable(data);
        menu();
    });
};

const addRole = () => {
    fetch('http://localhost:3001/api/role', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const departmentValues = data.map((department) => ({
            name: department.name,
            value: department.idD,
        }));
        inquirer.prompt([
            {
                name: 'title',
                message: 'What is the role title?',
                type: 'input',
            },
            {
                name: 'salary',
                message: 'What is the salary of the role?',
                type: 'input',
            },
            {
                name: 'department_id',
                message: 'What is the department id of the role?',
                type: 'rawlist',
                choices: departmentValues,
            }
        ]).then(answers => {
            fetch('http://localhost:3001/api/role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers),
            }).then(() => {
                menu();
            });
        });
    });
};

const viewAllEmployees = () => {
    fetch('http://localhost:3001/api/employee', {
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        consoleTable(data);
        menu();
    });
};

const addEmployee = () => {
    fetch('http://localhost:3001/api/role', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const roleValues = data.map((role) => ({
            name: role.title,
            value: role.idR,
        }));
        inquirer.prompt([
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
            }
        ]).then(answers => {
            fetch('http://localhost:3001/api/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers),
            }).then(() => {
                menu();
            });
        });
    });
};

const dataDisplayer = (data) => {
    console.table(data);
    menu();
};

menu();
