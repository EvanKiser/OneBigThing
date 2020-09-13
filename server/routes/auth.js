const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => { res.send(`Something is wrong. We'll fix it`) })

// @desc Auth with Google
// @route GET /auth/google
router.get('/google/', async (req, res) => {
    console.log('z')
    console.log(req.query)
    console.log('y')
    const user = User.findById('5f50ac3958d601fdfcd4604d')
    .exec()
    .then(user => {
        if (user) {
            console.log('kjdbekbd')
        } else {
            //User.create(req.query.id)
        }
    })
    .catch(err => {
        console.log('cccc')
        console.log(err)
    })
    // console.log(user)
})

router.post('/google/', async (req, res) => {
    console.log('n')
    console.log(req.body)
    console.log('y')
    try {
        await User.create(req.body)
    } catch (err) {
        console.error(err)
    }
})

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/' }), (req, res) => {
        console.log("fag bag")
        res.redirect('/')
    })

module.exports = router