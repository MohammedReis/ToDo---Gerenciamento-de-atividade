const express =require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/',TaskValidation,TaskController.Create);
router.put('/:id',TaskValidation, TaskController.Update);
router.get('/filter/all',MacaddressValidation,TaskController.All);
module.exports = router;