const {getAllTodo, getTodoById, createTodo, deleteTodo, updateTodo} = require('./todos.controller')

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
        console.log(data)
        if(data){
            res.status(200).json(data)
        } else{
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

const deleteId = (req, res) => {
    const id = Number(req.params.id)
    if(id) {
        const data = deleteTodo(id)
        res.status(204).json(data)        
    } else {
        res.status(400).json({message: "Id is not a number"})
    }
}

const updateId = (req, res) => {
    const id = Number(req.params.id)

    if(id){        
        const data = updateTodo(req.body, id)
        if(data){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Missing data'})
        }
    } else {
        res.status(400).json({message: "Id is not a number"})
    }
}


module.exports = {
    getAll,
    getById,
    create,
    deleteId,
    updateId
}
