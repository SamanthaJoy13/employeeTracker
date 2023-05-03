const router = require('express').Router();

const employee = require('../../../controllers/employeeController');

router.get('/', employee.getAllEmployees);
router.post('/', employee.AddEmployee);

module.exports = router;