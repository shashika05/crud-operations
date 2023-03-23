const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello. Router is working</h1>");
});

module.exports = router;
