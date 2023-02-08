const TaskModel = require('../model/TaskModel');

class TaskController{
    async Create(req,res){
        const task = new TaskModel(req.body);
        await task
        .save()
        .then(response => {
            return res.status(201).json(response);
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
    async All (req, res){
        await TaskModel.find({macaddress:{'$in':req.body.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }
    async Show(req,res){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response){
                return res.status(200).json(response);
            }else{
                return res.status(404).json({error:'Tarefa não encontrada'});
            }
        })
        .catch(err => {
            return res.status(500).json(err);
        });

    }
}

module.exports = new TaskController();