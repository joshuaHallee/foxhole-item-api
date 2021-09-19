# Foxhole Item API
An unofficial Item API for the game Foxhole. Contains information on items such as name, descriptions, costs, categories, ect.

[Foxhole](https://www.foxholegame.com/) is a registered trademark of [Siege Camp](https://www.siegecamp.com/).

## Installation
For additional information on installation for your project, view the [installation guide](./setup/README.md).

## Item Fields
Overview of all available fields, with short description.
```YAML
{
    _id: UUID,
    displayId: Number | key used in sorting per category, matches in game menu
    name: String | item name,
    description: String| item description,
    faction: Array | colonial or warden,
    imageName: String | item image png name,
    category: String | what tab category the item falls under,
    itemClass: String | Type of gun,
    ammoUsed: String | Type of ammo required for weapon,
    amountProduced: Number | amount made per crate,
    isTeched: Boolean | if it requires tech unlock or not,
    isMfpCraftable: Boolean | if it can be produced in mass production factory,
    numberProducedBonus: String | if making this in a mpf gives bonus,
    highVelocityBonus: String | high velocity,
    damageType: String | Type of damaged delt,
    damageDesc: String | additional info on damageType,
    vehiclePen: String | description on how ammo Type can penetrate vehicles,
    vehiclePenChance: String | additional info on vehiclePen,
    cost: {
        bmats: Number,
        rmats: Number,
        emats: Number,
        hemats: Number
    },
}
```

## Supported Queries
See API Paths for faction specific queries.
```YAML
itemCategory: String | get items from a specific category,
isMpfCraftable: Bool | can an item be crafted in a mpf
```

## API Paths
Available API paths and associated queries you can perform.

<br />

Get all items.
```
GET /api/v1/items
```

<br />

Get all Colonial items.
```
GET /api/v1/items/colonial
```
<br />

Get all Warden items.
```
GET /api/v1/items/warden
```

<br />

## Examples of API Calls & Queries
General examples of URL structures and available queries. Both `itemCategory` and `isMpfCraftable` queries are supported on all routes shown above.

<br />

Example of getting all items from both factions, that are in heavy_arms category, that are NOT able to be crafted in mpf.
```
GET /api/v1/items?itemCategory=heavy_arms&isMpfCraftable=false
```
```JSON
[
  {
    "cost": {
      "rmat": 200,
      "hemat": 1000
    },
    "faction": [
      "colonial",
      "warden"
    ],
    "_id": "614545d43353f6b2c483a0e0",
    "displayId": 21,
    "imgName": "Warhead.png",
    "itemName": "Warhead",
    "itemDesc": "The payload for ballistic rockets. A high yield bomb that delivers over 3 tons of TNT and is capable of leveling an entire village or town block.",
    "itemCategory": "heavy_arms",
    "numberProduced": 1,
    "isTeched": false,
    "isMpfCraftable": false
  }
]
```


<br />

Example of getting only Warden items, that are in the shippable category. 
```
GET /api/v1/items/warden?itemCategory=shipables
```
```JSON
Some results are omitted for this example due to length. Returned 7 results.
[
    {
        "cost": {
        "rmat": 75
        },
        "faction": [
        "colonial",
        "warden"
        ],
        "_id": "614545d43353f6b2c483a102",
        "displayId": 0,
        "imgName": "Concrete_Mixer.png",
        "itemName": "Concrete Mixer",
        "itemDesc": "A portable device that mixes various materials to form Concrete, which are used to build heavily fortified structures.",
        "itemCategory": "shipables",
        "numberProduced": 3,
        "isTeched": true,
        "isMpfCraftable": true
    },
    ...
    {
        "cost": {
        "rmat": 175
        },
        "faction": [
        "warden"
        ],
        "_id": "614545d43353f6b2c483a105",
        "displayId": 3,
        "imgName": "Huber_Exalt_150mm.png",
        "itemName": "Huber Exalt 150mm",
        "itemDesc": "A heavy cannon designed to shatter the garrisons and fortifications of advancing forces. The Exalt is best utilized when placed into a defensive position to take advantage of its impressive range.",
        "itemCategory": "shipables",
        "numberProduced": 3,
        "isTeched": true,
        "isMpfCraftable": true
    },
    ...
]
```

<br />

# Contributing & Issues
Contributions are more than appreciated, no matter how big or small the contribution is.

If you fix a bug or add a cool feature, please submit a [pull request](https://github.com/joshuaHallee/foxhole-item-api/compare).

Found a bug or want to open a discussion? Don't hesitate to [open an issue](https://github.com/joshuaHallee/foxhole-item-api/issues/new) and label it accordingly.