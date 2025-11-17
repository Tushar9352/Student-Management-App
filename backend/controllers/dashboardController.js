const Student = require("../models/Student");
const Class = require("../models/Class");
const Attendance = require("../models/Attendance");
const Assignment = require("../models/Assignment");
const Note = require("../models/Note");

exports.overview = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalClasses = await Class.countDocuments();
    const totalAssignments = await Assignment.countDocuments();
    const totalNotes = await Note.countDocuments();
    const today = new Date().toISOString().slice(0,10);
    const attendanceToday = await Attendance.countDocuments({ date: today, status: "Present" });
    res.json({ totalStudents, totalClasses, totalAssignments, totalNotes, attendanceToday });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.teacherDashboard = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const classes = await Class.find({ teacher: teacherId }).populate("students");
    const classIds = classes.map(c => c._id);
    const assignments = await Assignment.find({ classId: { $in: classIds } });
    res.json({ classes, assignments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
