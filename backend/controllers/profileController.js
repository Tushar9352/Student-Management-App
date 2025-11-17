const User = require("../models/User");

exports.uploadProfile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file" });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.profilePhoto = req.file.filename;
    await user.save();
    res.json({ message: "Profile updated", filename: req.file.filename });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
