import express from "express";
import {getCourse} from "../controllers/courses.js"
const router = express.Router()


router.get("/find/:course_id", getCourse)
export default router