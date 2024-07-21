const mongoose = require('mongoose');
var advertiseSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    image: {
        type: String,
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Advertise', advertiseSchema);