const multer = require("multer");
const path = require("path");
const fs = require("fs");

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const storage = (subfolder) => multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join("uploads", subfolder);
    ensureDir(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  }
});

const fileFilter = (allowedMime) => (req, file, cb) => {
  if (allowedMime.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Invalid file type"), false);
};

const limits = { fileSize: 10 * 1024 * 1024 };

module.exports = {
  uploadProfile: () => multer({ storage: storage("profiles"), fileFilter: fileFilter(["image/jpeg","image/png"]), limits }),
  uploadAssignment: () => multer({ storage: storage("assignments"), fileFilter: fileFilter(["application/pdf","image/png","image/jpeg"]), limits }),
  uploadNotes: () => multer({ storage: storage("notes"), fileFilter: fileFilter(["application/pdf","image/pdf","image/png","image/jpeg"]), limits })
};
