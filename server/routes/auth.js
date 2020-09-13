const express = require('express')
const passport = require('passport')
const router = express.Router()

const Task = require('../models/User')

router.get('/', (req, res) => { res.send(`Something is wrong. We'll fix it`) })

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', function (req, res) {
    console.log('pussinboots')
    passport.authenticate('google', { scope: ['profile'], failureRedirect: '/'})
    console.log('dicknboots')
})

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}),
    (req, res) => {
        console.log('puss')
        res.redirect('/dashboard')
    }
)

module.exports = router