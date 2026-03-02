import express from "express";
import { createData, getData } from "../controllers/dataControl.js";

const middlewareRoute = express.Router()


middlewareRoute.post('/create',createData)



export default middlewareRoute

//  http://localhost:5000/api/middleware/create
//  http://localhost:5000/api/middleware/getData
