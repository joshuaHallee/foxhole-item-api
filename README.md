# Foxhole Item API
Item API for the game Foxhole. Contains information on items such as name, descriptions, costs, categories, ect.

## Item Fields
All available fields that exist in the DB with short description, some items omit these so assume all are optional excluding `_id`.
```javascript
{
    _id: UUID,
    displayId: Number | key used in sorting per category, matches in game menu
    name: String | item name,
    description: String| item description,
    faction: Array | ["neutral", "colonial", "warden"],
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

## API Paths
Available API paths and associated queries you can perform.

```
GET /api/v1/items
```
Get all items from database.

<br />

```
GET /api/v1/items/:faction
```
Get all faction specific items from database.

Options: colonial, warden

<br />

```
GET /api/v1/items/:category
```
Gets all category specific items from database.

Options: small_arms, heavy_arms, utilities, medical, supplies