const db = require('../config/db');

const getAllTasks = async () => {
    const [tasks] = await db.query('SELECT * FROM tasks');
    return tasks;
};
const createTask = async (title, completed) => {
    const [result] = await db.query(
        'INSERT INTO tasks (title, completed) VALUES (?, ?)',
        [title, completed]
    );

    return result.insertId;
};
const updateTask = async (id, title, completed) => {
    const [result] = await db.query(
        'UPDATE tasks SET title = ?, completed = ? WHERE id = ?',
        [title, completed, id]
    );

    return result.affectedRows;
};
const deleteTask = async (id) => {
    const [result] = await db.query(
        'DELETE FROM tasks WHERE id = ?',
        [id]
    );

    return result.affectedRows;
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };