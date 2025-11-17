const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const result = await Attendance.create(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceByClass = async (req, res) => {
  try {
    const result = await Attendance.find({ classId: req.params.classId });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceByStudent = async (req, res) => {
  try {
    const result = await Attendance.find({ studentId: req.params.studentId });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceByDate = async (req, res) => {
  try {
    const result = await Attendance.find({ date: req.params.date });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
