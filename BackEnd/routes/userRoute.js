import express from "express";
import { createData } from "../controllers/dataControl.js";
import { validateUser } from "../middleware/validate.js";  

const middlewareRoute = express.Router();

middlewareRoute.post("/create", validateUser, createData);

export default middlewareRoute;

// http://localhost:5000/api/middleware/create
