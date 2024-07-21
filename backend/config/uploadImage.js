const cloudinary = require('./cloudinary.config')
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require('multer');
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'mindx_ecom'
    }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;