const router = require('express').Router()
const httpTodos = require('./todos.http')

router.route('/todos')
    .get(httpTodos.getAll)
    .post(httpTodos.create)
    
router.route('/todos/:id')
    .get(httpTodos.getById)

module.exports = {
    router
}