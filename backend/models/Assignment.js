const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  },
  file: { type: String },
  dueDate: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Assignment", AssignmentSchema);
