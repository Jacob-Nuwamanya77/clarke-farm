const multer = require('multer');

const path = require('path');

module.exports = function processImage(directory) {
  const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, `./uploads/${directory}`);
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  return multer({ storage });
};
