const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Add a student
router.post("/", studentController.addStudent);

// Get all students
router.get("/", studentController.getAllStudents);

// Get one student
router.get("/:id", studentController.getStudentById);

// Update a student
router.put("/:id", studentController.updateStudent);

// Delete a student
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
