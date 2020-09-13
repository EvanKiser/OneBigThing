const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => { res.send(`Something is wrong. We'll fix it`) })

// @desc Auth with Google
// @route GET /auth/google
router.get('/google/', async (req, res) => {
    console.log(req.query)
    // try { 
    const user = await User.findById('5f50ac3958d601fdfcd4604d')
    .exec()
    .then(use => {
        console.log('bbbb')
        console.log(use)
    })
    .catch(err => {
        console.log('cccc')
        console.log(err)
    })
    console.log(user)
        // User.findOne({ googleId: "108824629647544647455"})
        // .exec()
        // .then(doc => console.log(doc))
        // .catch(err => console.log('b'))
    //         if (user) {
    //             console.log('here')
    //             console.log(user)
    //             res.send({ 
    //                 firstName: user.firstName,
    //                 name: user.name,
    //                 image: user.image
    //             })
    //         } else {
    //             console.log('didnt work')
    //             console.log(err)
    //             console.log(user)
    //         }
    //     })
    // } catch (err) {
    //     console.error(err)
    // }
})

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/' }), (req, res) => {
        console.log("fag bag")
        res.redirect('/')
    })

module.exports = router