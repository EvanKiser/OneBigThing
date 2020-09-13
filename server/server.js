const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Load config
dotenv.config( { path: './config/config.env' } )

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Body parser
app.use(express.json())

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Sessions middlware
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false
}))

// Cors
app.use(cors())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3001

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)