const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  console.log(req.body);
  try {
    const data = await Todo.find();
    res.send(data);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    isCompleted: req.body.isCompleted,
  });

  try {
    const result = await todo.save();
    res.send(result);
    // console.log(result);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

module.exports = {
  getTodos,
  createTodo,
};
