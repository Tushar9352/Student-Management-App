const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const auth = require("../middlewares/authMiddleware");
const uploads = require("../middlewares/upload");

router.post("/upload", auth, uploads.uploadProfile().single("file"), profileController.uploadProfile);

module.exports = router;
