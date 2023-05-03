const connection = require('../config/connection');
const getAllRoles = async (req, res) => {
    const getAllRoles = 'SELECT * FROM role;';
      try {
          const [result] = await connection.query(getAllRoles);
          res.json(result);
    } catch (error) {
      res.status(500).json({error});
    };
  };

  const AddRole = async (req, res) => {
    const AddRole = 'INSERT INTO role SET ?;';
      try {
          const [result] = await connection.query(AddRole, req.body);
          res.json(result);
    } catch (error) {
      res.status(500).json({error});
    };
  };

  module.exports = {
    getAllRoles,
    AddRole
  };