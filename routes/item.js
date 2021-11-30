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

router.get('/', validate, async (req, res) => {
    try {
        searchQuery = {}
        if(req.query.itemCategory) searchQuery.itemCategory = req.query.itemCategory
        if(req.query.isMpfCraftable != undefined) searchQuery.isMpfCraftable = req.query.isMpfCraftable

        const items = await Items.find( searchQuery ).setOptions({ sanitizeFilter: true, strictQuery: false });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/colonial', validate, async (req, res) => {
    try {
        searchQuery = {}
        if(req.query.itemCategory) searchQuery.itemCategory = req.query.itemCategory
        if(req.query.isMpfCraftable != undefined) searchQuery.isMpfCraftable = req.query.isMpfCraftable
        searchQuery.faction = 'colonial';

        const items = await Items.find( searchQuery ).setOptions({ sanitizeFilter: true, strictQuery: false });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/warden', validate, async (req, res) => {
    try {
        searchQuery = {}
        if(req.query.itemCategory) searchQuery.itemCategory = req.query.itemCategory
        if(req.query.isMpfCraftable != undefined) searchQuery.isMpfCraftable = req.query.isMpfCraftable
        searchQuery.faction = 'warden';

        const items = await Items.find( searchQuery ).setOptions({ sanitizeFilter: true, strictQuery: false });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router