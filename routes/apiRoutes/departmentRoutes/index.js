const router = require('express').Router();

const department = require('../../../controllers/departmentController');

router.get('/', department.getAllDepartments);
router.post('/', department.AddDepartment);

module.exports = router;