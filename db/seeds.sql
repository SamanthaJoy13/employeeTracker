INSERT INTO department(name)
VALUES ("Engineering"),
    ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", "120000", "1"),
    ("Software Engineer", "90000", "1"),
    ("IT", "70000", "2");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Manny", "Jucaban", "1", ""),
    ("Sam", "Tavares", "2", "Manny"),
    ("John", "Doe", "3", "Sam");
