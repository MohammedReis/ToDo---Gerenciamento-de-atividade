const TaskModel = require('../model/TaskModel');
const {startOfDay, endOfDay} = require('date-fns');

const current = new Date();


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
    async Delete(req,res){
        await TaskModel.findByIdAndDelete(req.params.id)
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
    async Done(req,res){
        await TaskModel.findByIdAndUpdate({'_id':req.params.id}, {'done':req.params.done},{new:true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            return res.status(500).json(err);
        })
    }
    async Late(req,res){
        await TaskModel.find({'when':{'$lte':current}, 'macaddress':{'$in':req.body.macaddress}}).sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }
    async Today(req,res){
        await TaskModel.find({'macaddress':{'$in':req.body.macaddress},'when':{'$gte':startOfDay(current),'$lt':endOfDay(current)}
    }).sort('when')
    .then(response=>{
        return res.status(200).json(response);
    })
    .catch(err=> {
        return res.status(500).json(err);
    })
}

}

module.exports = new TaskController();