const { getTodos, createTodo } = require("./controllers/Todo");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello. Router is working");
});

router.get("/todos", getTodos);

router.post("/todos", createTodo);

module.exports = router;
