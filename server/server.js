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

//  Serve static assests if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    })
}

const PORT = process.env.PORT || 3001

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)