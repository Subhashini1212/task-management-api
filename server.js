const express = require('express');

const app = express();

app.use(express.json());
const taskRoutes = require('./routes/taskRoutes');

app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("Task Management API is running!");
});

const db = require('./config/db');

db.getConnection()
    .then(connection => {
        console.log("MySQL connected successfully!");
        connection.release();
    })
    .catch(error => {
        console.log("Database connection failed:", error.message);
    });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});