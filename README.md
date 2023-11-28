# Task Manager

Welcome to the Task Manager API documentation.

## Introduction

This API is implemented using Node.js, Express.js and MongoDB, providing functionality for managing tasks.

## Technologies Used

This project uses the following technologies:

- **Node.js:** JavaScript runtime environment.
- **Dot-env:** Loads environment variables from a .env file into process.env.
- **Express js:** Node.js framework.
- **Mongoose:** MongoDB object modeling for Node.js.
- **Nodemon:** Utility that monitors for changes in files and automatically restarts the server.
- **HTML:** Markup language for creating web pages.
- **CSS:** Styling language for designing web pages.

## Prerequirment

- Node.js and npm installed on your machine
- MongoDB installed locally or accessible remotely

## Installation And Usage

Follow these steps to set up and run the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tanni-Dey/Task-Manager.git
   ```

2. **Install dependencies:**

   ```bash
   cd Task-Manager
   npm install
   ```

3. **Create a .env file:**

   Create a `.env` file in the root of your project and add the following information:

   ```
   MONGODB_URI=your_mongo_connection_url
   ```

4. **Start the server:**

   ```bash
   npm start
   or
   nodemon start
   ```

   Access the application in a web browser at `http://localhost:5000`.

## Mongoose Model

### Task Model

- **title**: Title of the task
- **description**: Description of the task
- **status**: Current status of the task (Pending, In Progress, Completed)
- **dueDate**: Due date of the task

### Create a task

```http
POST /api/v1/tasks
```

#### Demo Request

```json
{
  "title": "Task 1",
  "description": "Description for Task 1",
  "status": "Pending",
  "dueDate": "2023-11-29"
}
```

### Get all tasks

```http
GET /api/v1/tasks
```

#### Demo Response

```json
{
  "tasks": [
    {
      "_id": "656608a9242af0e62f200c6f",
      "title": "Task 1",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nam possimus vitae porro",
      "status": "pending",
      "dueDate": "2023-12-12T18:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "656608e2242af0e62f200c71",
      "title": "Task 2",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nam possimus vitae porro",
      "status": "in-progress",
      "dueDate": "2023-12-12T18:00:00.000Z",
      "__v": 0
    }
  ]
}
```

### Get a single task by id

```http
GET /api/v1/tasks/:id
```

#### Demo Response

```json
{
  "task": {
    "title": "Task 1",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nam possimus vitae porro",
    "status": "pending",
    "dueDate": "2023-12-12T18:00:00.000Z",
    "_id": "656608a9242af0e62f200c6f",
    "__v": 0
  }
}
```

### Update a task by id

```http
PATCH /api/v1/tasks/:id
```

#### Demo Request

```json
{
  "title": "Task 1 updated",
  "description": "Description of Task 1 updated.",
  "status": "Completed",
  "dueDate": "2023-11-28"
}
```

#### Demo Response

```json
{
  "task": {
    "_id": "6564e7b9d4059018a846b1d4",
    "title": "Task 1 updated",
    "description": "Description of Task 1 updated",
    "status": "Completed",
    "dueDate": "2023-11-28T00:00:00.000Z",
    "__v": 0
  }
}
```

### Delete a task by id

```http
DELETE /api/v1/tasks/:id
```

#### Demo Response

```json
{
  "task": {
    "title": "Task 1",
    "status": "Completed",
    "description": "Description of Task 4",
    "dueDate": "2023-11-28T00:00:00.000Z"
  }
}
```

## Error Handling

The API handles errors including:

- Route not found
- Invalid task data
- Other potential errors

## Folder Structure

```plaintext
project-root/
│
├── controllers/
│ ├── tasks.js
│
├── db/
│ ├── connect.js
│
├── errors/
│ ├── customError.js
│ ├── handleErrorMessage.js
│
├── middleware/
│ ├── asyncWrapper.js
│ ├── errorHandler.js
│ ├── notFound.js
│
├── models/
│ ├── Task.js
│
├── public/
│ ├── favicon.png
│ ├── index.html
│
├── routes/
│ ├── tasks.js
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## The END

Thanks to `SJ Innovation` and `Project MearnifyU Team` For Your Support!
