const {getAllTodo, getTodoById, createTodo} = require('./todos.controller')

const getAll = (req, res) => {
    const data = getAllTodo()
    res.status(200).json({
        items: data.length,
        response: data
    })
}
const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = getTodoById(id)
        if(data.id){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    } else {
        res.status(400).json({message: "Id is not a number"})
    }
}

const create = (req, res) => {
    const data = createTodo(req.body)
    res.status(201).json(data)
}
module.exports = {
    getAll,
    getById,
    create
}
