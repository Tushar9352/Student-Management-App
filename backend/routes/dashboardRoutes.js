const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const auth = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

router.get("/overview", auth, roleCheck(["admin","teacher"]), dashboardController.overview);
router.get("/teacher", auth, roleCheck(["teacher"]), dashboardController.teacherDashboard);

module.exports = router;
