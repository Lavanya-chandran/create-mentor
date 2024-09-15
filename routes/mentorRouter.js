/** @format */

const express= require ("express");
const mentorController= require ("../controllers/mentorController.js");
const router = express.Router();

router.post("/create", mentorController.createMentor);
router.get("/all", mentorController.getAllMentors);

export default router;