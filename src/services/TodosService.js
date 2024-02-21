import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class TodosService {


  async getTodos() {
    const todos = await dbContext.Todos.find()
    return todos
  }
  async createTodo(todoData) {
    const todo = await dbContext.Todos.create(todoData)
    return todo
  }

  async getTodoById(todoId) {
    const todo = await dbContext.Todos.findById(todoId)
    if (!todo) {
      throw new BadRequest(`Invalid id: ${todoId}`)
    }
    return todo
  }

  async updateTodo(todoId, todoData) {
    const todoToUpdate = await this.getTodoById(todoId)

    todoToUpdate.description = todoData.description || todoToUpdate.description
    todoToUpdate.completed = todoData.completed == undefined ?
      todoToUpdate.completed
      :
      todoData.completed

    await todoToUpdate.save()

    return todoToUpdate
  }

  async destroyTodo(todoId) {
    const todoToDestroy = await this.getTodoById(todoId)

    await todoToDestroy.deleteOne()

    return `${todoToDestroy.description} is no more`
  }
}

export const todosService = new TodosService()