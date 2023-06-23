const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());


// * Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "react_fullstack_db",
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL: " + err);
    } else {
        console.log("Connection to MySQL successful");
    }
});

// * Create a route to handle the register form
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;

    // * Check if the mail are available
    const sql = 'INSERT INTO accounts (email, password) VALUES (?, ?)';
    const values = [email, password]
    connection.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({ err });
        }
        return res.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});