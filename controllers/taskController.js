const taskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const { title, completed } = req.body;
        if (!title || title.trim() === "") {
          return res.status(400).json({
            message: "Task title is required"
          });
        }

        const taskId = await taskModel.createTask(
            title,
            completed ?? false
        );

        res.status(201).json({
            message: "Task created successfully",
            id: taskId
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateTask = async (req, res) => {
    try {
        const { title, completed } = req.body;
        if (!title || title.trim() === "") {
            return res.status(400).json({
                 message: "Task title is required"
            });
        }
        const taskId = req.params.id;

        const affectedRows = await taskModel.updateTask(
            taskId,
            title,
            completed
        );

        if (affectedRows === 0) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ message: "Task updated successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const affectedRows = await taskModel.deleteTask(taskId);

        if (affectedRows === 0) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ message: "Task deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getAllTasks, createTask, updateTask, deleteTask };