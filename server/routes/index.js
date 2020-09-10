const express = require('express')
const router = express.Router()

const Task = require('../models/Task')

// @desc Login/Landing page
// @route GET /
router.get('/', (req, res) => {
    try {
        const tasks = Task.find({ user: "Evan Kiser" }).lean()
        res.json(tasks)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router