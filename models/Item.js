const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);