const { startOfYear } = require('date-fns')
const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

router.get('/allTasks/', async (req, res) => {
    const tasks = await Task.find()
    .exec()
    .then(tasks => {
        if (tasks) {
            res.status(200).json(tasks)
        } else {
            res.send("Not Tasks Found");
        }
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/', async (req, res) => {
    await Task.create(req.body)
    .then(task => {    
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

router.delete('/', async (req, res) => {
    const id = req.query.id;
    console.log('her')
    console.log(id)
    try {
        let task = await Task.findById(id).lean()
        if(!task) {
            res.send('Task Id not found')
        } else {
            await Task.deleteOne({ _id: id })
            res.json({ success: true })
        }
        //res.redirect('/')
    } catch(err) {
        res.json({ success: false })
    }
})

module.exports = router