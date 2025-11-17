const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const auth = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

router.post("/", auth, roleCheck(["admin","teacher"]), notificationController.createNotification);
router.get("/", auth, notificationController.getNotifications);

module.exports = router;
