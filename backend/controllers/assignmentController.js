const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

exports.createAssignment = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) data.file = req.file.filename;
    const result = await Assignment.create(data);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const result = await Assignment.find().sort({ createdAt: -1 });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAssignmentsByClass = async (req, res) => {
  try {
    const result = await Assignment.find({ classId: req.params.classId });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.submitAssignment = async (req, res) => {
  try {
    const data = {
      assignmentId: req.body.assignmentId,
      studentId: req.body.studentId,
      file: req.file ? req.file.filename : null
    };
    const result = await Submission.create(data);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const result = await Submission.find({ assignmentId: req.params.assignmentId });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
