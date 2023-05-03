const router =  require('express').Router();

const department = require('./departmentRoutes');
const role = require('./roleRoutes');
const employee = require('./employeeRoutes');

router.use('/department', department);
router.use('/employee', employee);
router.use('/role', role);

module.exports = router;

