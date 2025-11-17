const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) data.file = req.file.filename;
    const note = await Note.create(data);
    return res.status(201).json(note);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.json(notes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getNotesByClass = async (req, res) => {
  try {
    const notes = await Note.find({ classId: req.params.classId }).sort({ createdAt: -1 });
    return res.json(notes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.json(note);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.json({ message: "Note deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
