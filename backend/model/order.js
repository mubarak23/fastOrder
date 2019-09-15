const mongoose  = require('mongoose')

const orderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    no_of_order: {
        type: Number,
        default: 1,
    },
    amount: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('order', orderSchema);