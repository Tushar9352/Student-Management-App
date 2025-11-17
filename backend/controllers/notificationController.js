const Notification = require("../models/Notification");

exports.createNotification = async (req, res) => {
  try {
    const data = req.body;
    data.createdBy = req.user.id;
    const n = await Notification.create(data);
    res.status(201).json(n);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const { role, id } = req.user;
    const base = { $or: [{ targetType: "all" }, { targetType: role }] };
    const byId = [{ targetId: null }, { targetId: id }];
    const notifications = await Notification.find({ $and: [base, { $or: byId }] }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
