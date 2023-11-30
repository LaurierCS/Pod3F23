import {db } from "../connect.js"

export const getCourse = (req,res) => {
    console.log('yo')
    const course_id = req.params.course_id;
    const q = "select * from course_list where course_id = ?"
    db.query(q,[course_id], (err,data)=>{
        if (err) return res.status(500).json(err)
        return res.json(info)
    })
}