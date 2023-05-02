INSERT INTO department(id, name)
VALUES ("1", "Engineering"),
    ("2", "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES ("1", "Lead Engineer", "120000", "1"),
    ("2", "Software Engineer", "90000", "1")
    ("3", "IT", "70000", "2");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("1", "Manny", "Jucaban", "1", "null"),
    ("2", "Sam", "Tavares", "2", "1"),
    ("3", "John", "Doe", "3", "2");
