# Setup and Installation

This project is a Node.js server that utilizes Express to serve content from MongoDB. If you wish to contribute to this project, feel free to fork and open a pull request. There is no planned support for an API wrapper at this time. 

## Clone and npm Install

```
git clone https://github.com/joshuaHallee/foxhole-item-api.git
```

```
cd ./foxhole-item-api
```

```
npm install
```

## Populate a MongoDB Server
Create a new database and a collection called **items**. All item records can be located in [foxhole-db.json](./foxhole-db.json). Import this file into your  collection, called **items**, as JSON data.

## Notice About Images
All images found within the images folder, with exclusion to placeholder images, belong to [Siege Camp](https://www.siegecamp.com/) and were obtained through the [Foxhole Wiki](https://foxhole.fandom.com/wiki/Foxhole_Wiki).

This API setup folder contains item [images](./images), but will not host them through the API and never will. You will need to provide a solution for yourself for image hosting.

## Add .env File
Example .env file structure with placeholder values. Update the mongodb URI with the new database name.

```
PORT=3001
MONGO_URI=mongodb://localhost:27017/foxhole-item-api
```

## Start Server

Dev environment runs nodemon and listens for changes while prod does not.

Development: `npm run dev`

Production: `npm start`

Entry point for the Foxhole Item API. You should see a welcoming message.
```
http://localhost:3001/api/v1/
```