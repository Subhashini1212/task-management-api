# Task Management API

A RESTful Task Management API built using Node.js, Express.js and MySQL. It allows users to create, retrieve, update and delete tasks through HTTP requests.

## Technologies Used

- Node.js
- Express.js
- MySQL
- JavaScript
- mysql2
- dotenv
- Postman
- Git and GitHub

## Features

- Create new tasks.
- Retrieve all tasks.
- Update existing tasks.
- Delete tasks.
- Input validation.
- Error handling.
- MySQL database integration.
- MVC architecture.

## Project Structure

```text
task-management-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/Subhashini1212/task-management-api.git
```

2. Navigate to the project directory:

```bash
cd task-management-api
```

3. Install dependencies:

```bash
npm install
```

4. Create a MySQL database:

```sql
CREATE DATABASE task_management;

USE task_management;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
```

5. Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=task_management
PORT=3000
```

Replace the password with your local MySQL password.

6. Start the development server:

```bash
npm run dev
```

The API runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

### Sample POST Request

```json
{
  "title": "Learn Backend Development",
  "completed": false
}
```

### Sample Response

```json
{
  "message": "Task created successfully",
  "id": 1
}
```

## Architecture

This project follows the Model-View-Controller (MVC) architecture.

- **Routes:** Direct incoming requests to the appropriate controller.
- **Controllers:** Handle application logic and HTTP responses.
- **Models:** Perform database operations.
- **Database:** Stores task information in MySQL.

## Testing

API endpoints were tested using Postman.

## Future Improvements

- User authentication and authorization.
- Task filtering and searching.
- Pagination.
- Deployment to a cloud platform.

## Author

Subhashini

B.Tech Computer Science and Engineering