const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

// Load config
dotenv.config( { path: './config/config.env' } )

connectDB()

const app = express()

// Body parser
app.use(express.json())

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Cors
app.use(cors())

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/task', require('./routes/tasks'))

const PORT = process.env.PORT || 3001

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)