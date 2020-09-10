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
        required: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', TaskSchema)