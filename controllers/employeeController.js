const connection = require('../config/connection');
const getAllEmployees = async (req, res) => {
    const getAllEmployees = 'SELECT * FROM employee;';
      try {
          const [result] = await connection.query(getAllEmployees);
          res.json(result);
    } catch (error) {
      res.status(500).json({error});
    };
  };

  const AddEmployee = async (req, res) => {
    const AddEmployee = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) SET ?;';
      try {
          const [result] = await connection.query(AddEmployee, req.body);
          res.json(result);
    } catch (error) {
      res.status(500).json({error});
    };
  };

  module.exports = {
    getAllEmployees,
    AddEmployee
  };