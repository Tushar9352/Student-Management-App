const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadNotes");
const notesController = require("../controllers/notesController");

router.post("/", upload.single("file"), notesController.createNote);
router.get("/", notesController.getAllNotes);
router.get("/class/:classId", notesController.getNotesByClass);
router.get("/:id", notesController.getNoteById);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
