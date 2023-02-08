const TaskModel = require('../model/TaskModel');

class TaskController{
    async Create(req,res){
        const task = new TaskModel(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            return res.status(500).json(err);
        })
    }
    async Update(req, res){
        await TaskModel.findByIdAndUpdate({'_id':req.params.id},req.body,{new:true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }
}

module.exports = new TaskController();