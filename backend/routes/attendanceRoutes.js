const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/", attendanceController.markAttendance);
router.get("/class/:classId", attendanceController.getAttendanceByClass);
router.get("/student/:studentId", attendanceController.getAttendanceByStudent);
router.get("/date/:date", attendanceController.getAttendanceByDate);

module.exports = router;
