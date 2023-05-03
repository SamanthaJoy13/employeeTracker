const connection = require('../config/connection');
const getAllDepartments = async (req, res) => {
      const getAllDepartments = 'SELECT * FROM department;';
        try {
            const [result] = await connection.query(getAllDepartments);
            res.json(result);
      } catch (error) {
        res.status(500).json({error});
      };
    };

    const AddDepartment = async (req, res) => {
        const AddDepartment = 'INSERT INTO department SET ?;';
          try {
              const [result] = await connection.query(AddDepartment, req.body);
              res.json(result);
        } catch (error) {
          res.status(500).json({error});
        };
      };

      module.exports = {
        getAllDepartments,
        AddDepartment
      };