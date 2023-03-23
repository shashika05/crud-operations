const express = require("express");
const router = require("./router");

const PORT = 8080;

const app = express();

app.listen(PORT, async () => {
  console.log(`Server up on port http://localhost:${PORT}`);
});

app.use(router);
