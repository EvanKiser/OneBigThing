const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const router = express.Router()

// @desc Auth with Google
// @route GET /auth/google
router.get('/google/', async (req, res) => {
    const user = User.findOne( {googleId: req.query.googleId})
    .exec()
    .then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(401).send('User not found')
        }
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/google/', async (req, res) => {
    await User.create(req.body)
    .then(result => {    
        console.log(result)
        res.status(201).json({
            message: "User created",
            createdProduct: result
        })
    })
    .catch(err => res.status(400).json({ error: err }))
})

module.exports = router