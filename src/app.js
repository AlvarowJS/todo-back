const express = require("express");
const todoRouter = require('./todos/todos.router').router

const app = express()
const port = 8000

app.use(express.json())

app.use('/api/v1', todoRouter)
app.listen(port, () => console.log(`Listening on port ${port}`))