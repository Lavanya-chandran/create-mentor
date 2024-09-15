/** @format */

const express= require("express");
const mentorRouter =require ("./mentorRouter.js");
const studentRouter=require ("./studentRouter.js");
const commonRouter =require ("./commonRouter.js");
const router = express.Router();

router.use("/mentors", mentorRouter);
router.use("/common", commonRouter);
router.use("/students", studentRouter);

export default router;