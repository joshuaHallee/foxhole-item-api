//'npm start' for production
//'npm run dev' for development
const dotenv = require('dotenv')
const express = require('express')
const rateLimit = require('express-rate-limit')

// Load config
dotenv.config({ path: './.env'})

// Connect MongoDB
const connectDB = require('./db-connection')
connectDB()

const PORT = process.env.PORT || 5000
const app = express()

// Import Routes
const itemRoute = require('./routes/item')

// Establish Rate Limit
const limiter = rateLimit({
    windowMs: process.env.RATE_LIMIT_MINUTE * 60 * 1000, // minutes
    max: process.env.RATE_LIMIT_REQUEST
})

// Enable When Behind a Proxy
app.set('trust proxy', 1)

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(limiter)
app.use('/api/v1/items', itemRoute)

app.use('/', (req, res) => {
    res.send('Welcome to the Foxhole item API.')
})

app.listen(PORT, () => {
    console.log(`Sever running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})