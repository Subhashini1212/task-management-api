const express = require('express');
const router = express.Router();
const db = require('../config/db');
const taskController = require('../controllers/taskController');

let tasks = [
    { id: 1, title: "Learn API Development", completed: false },
    { id: 2, title: "Build a backend project", completed: true }
];

router.get('/', taskController.getAllTasks);

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;