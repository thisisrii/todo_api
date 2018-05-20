'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.listAllTasks = function(req, res){
    Task.find({}, function(err, task){      
        if (err){
            res.send(err);
        }else{
            res.json(task);
        }
           
    });
};

exports.createTask = function(req, res){
    var newTask = new Task(req.body);
    newTask.save(function(err, task){
        if(err){
            res.send(err);
        }else{
            res.json(task);
        }
    });
};

exports.updateTask = function(req, res){
    Task.findOneAndUpdate({_id: req.paramms.taskId}, req.body, {new: true}, function(err, task){
        if(err){
            res.send(err);
        }else{
            res.jspon(task);
        }
    });
};

exports.deleteTask = function(req, res){
    Task.remove({ _id: req.paramms.taskId}, function(err, task){
        if(err){
            res.send(err);
        }else{
            res.json({ message: "Task successfully deleted" });
        }
    });
};

