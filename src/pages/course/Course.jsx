import "./course.scss";
import React, { useEffect, useState } from 'react';
//import { makeRequest } from "../../axios"
//import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import { useLocation } from "react-router-dom";
import CoursesHeader from "../../components/CoursesHeader/CoursesHeader"
import Card from '../../components/Card/Card'



const Course = () => {
    const cid = useLocation().pathname.split("/")[2]

    const [courses, setCourses] = useState([])
    const onlyCourse = courses[0]
    useEffect(() => {
        const getCourse = async () => {
            try {
                const res = await axios.get("http://localhost:5000/course/" + cid)
                setCourses(res.data)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        getCourse();

    }, []);


    return (
        <div>
            {courses.map(courses => (
                <div className="" key={courses.course_id}>
                    <h1>Course Page</h1>
                    <CoursesHeader
                        score={88}
                        coursecode={courses.course_id}
                        birdness={19}
                        usefulness={86}
                        enjoyability={62}
                        averageGrade={71}
                    />
                    <Card />
                    <Card />
                    <Card />
                    <p>{courses.course_id}</p>
                </div>
            ))}


        </div>

    )
}

export default Course
