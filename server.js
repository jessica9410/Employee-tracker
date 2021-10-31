
const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'routeroute',
        database: 'eTracker_db'
    },
    console.log(`Connected to the eTracker_db database.`)
);
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  module.exports = db;
