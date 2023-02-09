const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');


router.post('/',TaskValidation,TaskController.Create);
router.put('/:id',TaskValidation, TaskController.Update);
router.put('/:id/:done', TaskController.Done);
router.delete('/:id',TaskController.Delete);
router.get('/:id',TaskController.Show);
router.get('/filter/all/:macaddress',TaskController.All);
router.get('/filter/late/:macaddress',TaskController.Late);
router.get('/filter/today/:macaddress',TaskController.Today);
router.get('/filter/week/:macaddress',TaskController.Week);
router.get('/filter/month/:macaddress',TaskController.Month);
router.get('/filter/year/:macaddress',TaskController.Year);




module.exports = router;