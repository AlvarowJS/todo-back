const todoDB = [{
    id: 1,
    description: "make ui",
    currentTime: "12-12-10",
    member: "Alvaro",
    status: "pendiente"
}]

const getAllTodo = () => {
    return todoDB
}

const getTodoById = (id) => {
    const filteredDB = todoDB.filter(todo => todo.id === id)
    return filteredDB[0]
}

const createTodo = (todoObj) => {
    if (todoDB.length === 0) {
        const newTodo = {
            id: 1,
            description: todoObj.description,
            currentTime: todoObj.currentTime,
            member: todoObj.member,
            status: todoObj.status
        }

        todoDB.push(newTodo)
        return newTodo
    }
    const newTodo = {
        id: todoDB[todoDB.length - 1].id + 1,
        description: todoObj.description,
        currentTime: todoObj.currentTime,
        member: todoObj.member,
        status: todoObj.status
    }
    todoDB.push(newTodo)

    return newTodo
}

const deleteTodo = (id) => {
    const index = todoDB.findIndex(item => item.id === id)
    if (index !== -1) {
        todoDB.splice(index, 1)
        return todoDB
    }
}

const updateTodo = (todoObj, id) => {
    const index = todoDB.findIndex(item => item.id === id)
    if (todoObj.description && todoObj.currentTime && todoObj.member && todoObj.status) {
        todoDB[index] = {
            id,
            description: todoObj.description,
            currentTime: todoObj.currentTime,
            member: todoObj.member,
            status: todoObj.status            
        }
        return todoDB
    }
}

module.exports = {
    getAllTodo: getAllTodo,
    getTodoById: getTodoById,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
}