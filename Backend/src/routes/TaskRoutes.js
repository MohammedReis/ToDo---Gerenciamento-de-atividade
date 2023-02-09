const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/',TaskValidation,TaskController.Create);
router.put('/:id',TaskValidation, TaskController.Update);
router.put('/:id/:done', TaskController.Done);
router.get('/:id',TaskController.Show);
router.delete('/:id',TaskController.Delete);
router.get('/filter/all',MacaddressValidation,TaskController.All);
router.get('/filter/late',MacaddressValidation,TaskController.Late);
router.get('/filter/today',MacaddressValidation,TaskController.Today);
router.get('/filter/week',MacaddressValidation,TaskController.Week);
router.get('/filter/month',MacaddressValidation,TaskController.Month);




module.exports = router;