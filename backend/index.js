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

app.post('/courses_list', (req,res)=>{
    const q = 'insert into courses_list (`course_id`,`course_name`,`course_link`,`course_description`) values (?)';

    const values = [
        req.body.course_id,
        req.body.course_name,
        req.body.course_link,
        req.body.course_description,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('Courses added successfully')
    })
})
app.get('/courses_list',(req,res)=>{
    db.connect();
    const q = "SELECT * FROM courses_list"
    db.query(q,(err,data)=>{
        if(err) return res.json('err')
        return res.json(data)
    })
})


//CONNECT TO MYSQL
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'wlu_flow_db'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});



//ADD API ROUTES IF NEEDED

