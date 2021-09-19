const express = require('express')
const router = express.Router()
const validate = require('../validation/query')
const Items = require('../models/Item')

// http://localhost:3001/api/v1/items
// http://localhost:3001/api/v1/items/colonial
// http://localhost:3001/api/v1/items/warden

/* supported query fields
    &itemCategory
    &isMpfCraftable
*/

router.get('/', async (req, res) => {
    try {
        let searchQuery = await validate.validateQuery(req);

        const items = await Items.find( searchQuery )
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/colonial',  async (req, res) => {
    try {
        let searchQuery = await validate.validateQuery(req);

        // add resource specific filter
        searchQuery.faction = 'colonial';
        const items = await Items.find( searchQuery )
        res.status(200).json(items)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/warden', async (req, res) => {
    try {
        let searchQuery = await validate.validateQuery(req);

        // add resource specific filter
        searchQuery.faction = 'warden';
        const items = await Items.find( searchQuery )
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router