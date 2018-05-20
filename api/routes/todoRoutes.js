'use strict'

module.exports = function (app) {
    var todoList = require('../controllers/todoController');
    
    //Routes
    app.route('/')
        .get(todoList.listAllTasks);

    app.route('/tasks')
        .get(todoList.listAllTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        //.get(todoList.readTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);

    
};