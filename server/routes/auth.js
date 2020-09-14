const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const router = express.Router()

// @desc Auth with Google
// @route GET /auth/google
router.get('/google/', async (req, res) => {
    const user = await User.findOne( {googleId: req.query.googleId})
    .exec()
    .then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.send("User Not Found");
        }
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/google/', async (req, res) => {
    await User.create(req.body)
    .then(user => {    
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = router