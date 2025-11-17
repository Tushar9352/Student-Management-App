const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  className: { type: String, required: true },
  section: { type: String, default: "" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Class", ClassSchema);
