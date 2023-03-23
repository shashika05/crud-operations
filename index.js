const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const router = require("./router");

const PORT = 8080;

const app = express();

dotenv.config();

app.listen(PORT, async () => {
  console.log(`Server up on port http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router);
