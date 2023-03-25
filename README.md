# crud-operations
A simple CRUD Operation (Create, Read, Update, and Delete operations) server (Here is back-end only) made by using MongoDB, Express.js and Node.js.

![Node Version](https://img.shields.io/badge/node-v18.12.1-yellowgreen.svg)
![Express.js Version](https://img.shields.io/badge/express-v4.18.2-blue.svg)
![MongoDB Version](https://img.shields.io/badge/mongodb-v5.0.15-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v7.0.2-blue.svg)


## Show Some :heart: :wave:
[![GitHub Stars](https://img.shields.io/github/stars/shashika05/crud-operations.svg?style=social&label=Star)](https://github.com/shashika05/crud-operations)
[![GitHub Forks](https://img.shields.io/github/forks/shashika05/crud-operations.svg?style=social&label=Fork)](https://github.com/shashika05/crud-operations/fork)
[![GitHub Watchers](https://img.shields.io/github/watchers/shashika05/crud-operations.svg?style=social&label=Watch)](https://github.com/shashika05/crud-operations)

[![Follow on GitHub](https://img.shields.io/github/followers/shashika05/.svg?style=social&label=Follow)](https://github.com/shashika05)
[![Follow on Facebook](https://img.shields.io/badge/Follow%20%40shashika05%20on-Facebook-%233C5A99.svg)](https://www.facebook.com/shashika.r.yasas)
[![Follow on Instagram](https://img.shields.io/badge/Follow%20%40shashika05%20on-Instagram-C13584.svg)](https://www.instagram.com/shashika.raveen)

## Instructions

Fork, then download or clone the repo.
```bash
git clone https://github.com/<your-user-name>/crud-operations.git
```

You can install all dependencies by
```bash
npm install
```

If you're using Yarn you can install all dependencies by,
```bash
yarn add
```


Make sure that MongoDB service is running and you have added **MONGODB_URL** into the .env file in your root directory
*-You can obtain your MongoDB Url from MongoDB Dashboard -> Connect -> Connect your application section*

To add *MONGODB_URL* into the *.env*, Create file called .env in the root and add *MONGODB_URL* as seen in the code below.
```env
MONGODB_URL=mongodb://dave:password@localhost:27017?authMechanism=DEFAULT&authSource=db&ssl=true
```
*You can run the server by,*
```bash
npm start
```
Or using Yarn,
```bash
yarn start
```

## Contribute
Feel free to help out as I may have other work/life commitments. See [CONTRIBUTING.md](CONTRIBUTING.md).

## To Do

- [x] Create
- [x] Read
- [x] Update
- [x] Delete
