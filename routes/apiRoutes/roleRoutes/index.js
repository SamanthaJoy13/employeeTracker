const router = require('express').Router();

const role = require('../../../controllers/roleController');

router.get('/', role.getAllRoles);
router.post('/', role.AddRole);

module.exports = router;