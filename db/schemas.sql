DROP DATABASE IF EXISTS empTracker;
CREATE DATABASE empTracker;

USE empTracker;

CREATE TABLE department ( 
    idD INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (idD)
);

CREATE TABLE role (
    idR INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (idR),
    FOREIGN KEY (department_id) REFERENCES department(idD)
);

CREATE TABLE employee (
    idE INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (idE),
    FOREIGN KEY (role_id) REFERENCES role(idR)
);