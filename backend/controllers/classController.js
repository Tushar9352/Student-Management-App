const Class = require("../models/Class");
const Student = require("../models/Student");

// Create class
exports.createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    return res.status(201).json(newClass);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("students");
    return res.json(classes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get one class
exports.getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id).populate("students");

    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.json(classData);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Update class
exports.updateClass = async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Delete class
exports.deleteClass = async (req, res) => {
  try {
    const result = await Class.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Class not found" });
    }
    return res.json({ message: "Class deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Assign students to class
exports.assignStudents = async (req, res) => {
  try {
    const { classId, studentIds } = req.body;

    const classObj = await Class.findById(classId);
    if (!classObj) return res.status(404).json({ message: "Class not found" });

    // Add unique students only
    studentIds.forEach(id => {
      if (!classObj.students.includes(id)) {
        classObj.students.push(id);
      }
    });

    await classObj.save();

    return res.json({ message: "Students added", class: classObj });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get all students of a class
exports.getStudentsInClass = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId).populate("students");

    if (!classData) return res.status(404).json({ message: "Class not found" });

    return res.json(classData.students);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
