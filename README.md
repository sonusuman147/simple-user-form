# Simple Data Store

A simple full-stack web application that stores user information in a MongoDB database using **Node.js**, **Express.js**, and **MongoDB Atlas**.

This project is built for learning how to connect a frontend with a backend and save data in MongoDB.

---

## Features

- Store Name
- Store Email Address
- Store Mobile Number
- Store Date of Birth
- Save data to MongoDB Atlas
- Simple and responsive UI
- Basic fade-in animation
- Express.js backend
- Mongoose for MongoDB

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## Project Structure

```
simple-data-store/
│
├── models/
│   └── User.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/simple-data-store.git
```

### 2. Open Project

```bash
cd simple-data-store
```

### 3. Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/simpleDB
PORT=5000
```

---

## Run the Application

```bash
node server.js
```

or

```bash
npm start
```

Server Output

```
MongoDB Connected
Server Running
```

---

## Open in Browser

```
http://localhost:5000
```

---

## User Information Stored

The application stores:

- Name
- Email Address
- Mobile Number
- Date of Birth

---

## MongoDB Document Example

```json
{
  "_id": "66ab12345",
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "dob": "2003-05-15"
}
```

---

## Dependencies

- Express
- Mongoose
- CORS
- dotenv

Install manually if needed:

```bash
npm install express mongoose cors dotenv
```

---

## Deployment

This project can be deployed on:

- Render (Recommended)
- Railway

Database:

- MongoDB Atlas

---

## Learning Objectives

This project demonstrates:

- Creating a simple Express server
- Connecting Node.js to MongoDB Atlas
- Creating a Mongoose model
- Handling POST requests
- Saving data into MongoDB
- Using the Fetch API
- Serving static files with Express

---

## Future Improvements

- View stored data
- Update records
- Delete records
- Form validation
- Authentication
- Search functionality

---

## Author

**Sonu Suman Ojha**

B.Tech Computer Science Engineering

---

## License

This project is created for educational and learning purposes.
