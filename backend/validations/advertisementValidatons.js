const { body } = require("express-validator");
module.exports = [
    body('title').not().isEmpty().trim().escape().withMessage('title is required'),
    body('image').not().isEmpty().withMessage('image is required'),
];
