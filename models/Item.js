const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    displayId: Number,
    name: String,
    description: String,
    faction: Array,
    imageName: String,
    category: String,
    itemClass: String,
    ammoUsed: String,
    amountProduced: Number,
    isTeched: Boolean,
    isMfpCraftable: Boolean,
    numberProducedBonus: String,
    highVelocityBonus: String,
    damageType: String,
    damageDesc: String,
    vehiclePen: String,
    vehiclePenChance: String,
    cost: {
        bmats: Number,
        rmats: Number,
        emats: Number,
        hemats: Number
    },
})

module.exports = mongoose.model('Item', itemSchema)