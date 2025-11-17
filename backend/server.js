// server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require("./config/db");

// route modules
const authRoutes = require("./routes/authRoutes");
const classRoutes = require("./routes/classRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const notesRoutes = require("./routes/notesRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (keep uploads folder if you use it)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes — each of these must export an express.Router()
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/students", studentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Smart Campus Backend is Running…");
});

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
