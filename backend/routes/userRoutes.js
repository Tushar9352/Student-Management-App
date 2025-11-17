const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/teacher", auth, roleCheck(["admin"]), userController.createTeacher);
router.get("/", auth, roleCheck(["admin"]), userController.getAllUsers);
router.post("/assign-teacher", auth, roleCheck(["admin"]), userController.assignTeacherToClass);

module.exports = router;
