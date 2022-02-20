const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = new Todo({
        title
    })

    try {
        const newTask = await todo.save();
        res.status(200).json(newTask);
    } catch (err) {
        res.status(400).json(err);
    }
};


