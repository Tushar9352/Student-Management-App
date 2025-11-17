const Student = require("../models/Student");

// CREATE
exports.addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).json(student);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    return res.json(students);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET SINGLE
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    return res.json(student);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student) return res.status(404).json({ message: "Student not found" });

    return res.json(student);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) return res.status(404).json({ message: "Student not found" });

    return res.json({ message: "Student deleted successfully" });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
