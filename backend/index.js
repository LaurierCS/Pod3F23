import express from "express"
import courseRoutes from "./routes/courses.js"
import {db} from "./connect.js"
import cors from "cors";


db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});



const app = express()
app.use("/api/courses", courseRoutes)
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(5000, () => {
    console.log("hi api")
})


app.get('/course/:id', (req,res) => {
    const course_id = req.params.id;

    const q = "select * from courses_list where course_id = ?"
    db.query(q,[course_id],(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get('/courses_list',(req,res)=>{
    const q = "SELECT * FROM courses_list"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

