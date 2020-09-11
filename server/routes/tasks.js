const express = require('express')
const router = express.Router()

const Task = require('../models/Task')

// @desc Login/Landing page
// @route GET /
router.get('/task', async, (req, res) => {
    try {
        const tasks = await Task.find({ user: "Evan Kiser" }).lean()
        res.json(tasks)
    } catch (err) {
        console.error(err)
    }
})

router.post('/task', async, (req, res) => {
    try {
        req.body.user = req.user.id
        await Task.create(req.body)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router