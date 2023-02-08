const express =require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/',TaskValidation,TaskController.Create);
router.put('/:id',TaskValidation, TaskController.Update)
module.exports = router;