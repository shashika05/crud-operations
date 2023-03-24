const { getTodos, createTodo, updateTodo } = require("./controllers/Todo");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello. Router is working");
});

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:todoID", updateTodo);

module.exports = router;
