const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadAssignment");
const assignmentController = require("../controllers/assignmentController");

router.post("/", upload.single("file"), assignmentController.createAssignment);
router.get("/", assignmentController.getAssignments);
router.get("/class/:classId", assignmentController.getAssignmentsByClass);
router.post("/submit", upload.single("file"), assignmentController.submitAssignment);
router.get("/submissions/:assignmentId", assignmentController.getSubmissions);

module.exports = router;
