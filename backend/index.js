//SETTING UP EXPRESS SERVER
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});



//CONNECT TO MYSQL
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR_DB_USER',
    password: 'YOUR_DB_PASSWORD',
    database: 'YOUR_DB_NAME'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});


//ADD API ROUTES IF NEEDED

