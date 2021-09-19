//'npm start' for production
//'npm run dev' for development

const express = require('express')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './.env'})

// Connect MongoDB
const connectDB = require('./db-connection')
connectDB()

const PORT = process.env.PORT || 5000
const app = express()

// Import Routes
const itemRoute = require('./routes/item')

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/items', itemRoute)

app.use('/', (req, res) => {
    res.send('Welcome to the Foxhole item API.')
})

app.listen(PORT, () => {
    console.log(`Sever running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})