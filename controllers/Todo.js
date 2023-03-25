const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  try {
    const data = await Todo.find();
    res.send(data);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
    });
    const result = await todo.save();
    res.send(result);
    // console.log(result);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const filter = { _id: req.params.todoID };
    const update = {
      $set: {
        title: req.body.title,
        description: req.body.description,
        isCompleted: req.body.isCompleted,
        updatedAt: Date.now(),
      },
    };
    const result = await Todo.findOneAndUpdate(filter, update, { new: true });
    res.json(result);
    // console.log(result);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const deleteTodo = async (req, res) => {
  // try {
  //   const del = await Todo.deleteOne({ _id: req.params.todoID });
  //   res.send(del);
  // } catch (err) {
  //   res.send(err);
  //   console.log(err);
  // }
  await Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
