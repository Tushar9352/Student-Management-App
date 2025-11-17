const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Attendance", AttendanceSchema);
