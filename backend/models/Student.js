const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  phone: { type: String, required: true },

  fatherName: { type: String },
  motherName: { type: String },

  address: { type: String },

  className: { type: String }, 
  rollNumber: { type: Number },

  profilePhoto: { type: String }, // optional

}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
