/** @format */

const express =require("express");
const studentController= require("../controllers/studentController.js");
const router = express.Router();

router.post("/create", studentController.createStudent);
router.get("/all", studentController.getAllStudents);

export default router;