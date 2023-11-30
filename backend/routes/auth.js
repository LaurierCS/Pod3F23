import express from "express";

import {login, logout, register} from "../controllers/auth.js"

const router = express.Router()

login.post("login",login)
login.post("register",register)
login.post("logout",logout)