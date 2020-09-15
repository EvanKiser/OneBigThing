const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Task', TaskSchema)