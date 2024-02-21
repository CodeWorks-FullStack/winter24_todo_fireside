import { dbContext } from "../db/DbContext.js"

class TodosService {
  async getTodos() {
    const todos = await dbContext.Todos.find()
    return todos
  }
  async createTodo(todoData) {
    const todo = await dbContext.Todos.create(todoData)
    return todo
  }
}

export const todosService = new TodosService()